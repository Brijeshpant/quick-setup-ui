import {createDirectory, copyFileOrDir, writeJson} from './fileUtil';
const path = require('path');
const object = require('json-templater/object');
const exec = require('child_process').exec;

const initWebPack = (projectPath,templateDirectory) => {
    let webPackSource = path.join(templateDirectory, 'webpack.config.js');
    let webPackDestination = path.join(projectPath, 'webpack.config.js');
    copyFileOrDir(webPackSource, webPackDestination);
};
const initbabel = (projectPath,templateDirectory) => {
    let webPackSource = path.join(templateDirectory, '.babelrc');
    let webPackDestination = path.join(projectPath, '.babelrc');
    copyFileOrDir(webPackSource, webPackDestination);
};

const installNodeDependencies = (projectPath, projectDependencies) => {
    const installNpmPackage = (packageToInstall, option) => {
        var cmd = 'npm install --prefix ' + projectPath + ' ' + packageToInstall + ' -' + option;
        exec(cmd, {maxBuffer: 1024 * 500}, (error ,stdout, stderr) => {
            if(error){
                console.log(error);
            }
            else {
                console.log(stdout);
            }
        });
    };

    console.log('Installing npm dependencies in ' , projectPath);
    for (var dependency of projectDependencies) {
        const option = dependency.depType == 'run time dependency' ? 'S' : 'D';
        console.log('Installing ', dependency.name);
        installNpmPackage(dependency.name, option);
    };

    if(projectDependencies.size > 0){
        console.log('following dependencies must have been installed =====> ');
        for (var dependency of projectDependencies) {
            console.log(dependency.name);
        };
        console.log('if your package.json missing one of them, please install manually');
    }



};

const resolveTemplate = (projectName) => {

    const values = {
        projectName: projectName
    };

    const packageJsonTemplate = {
        name: '{{projectName}}',
        version: '1.0.0',
        description: 'Bootstrap for {{projectName}}',
        author: '',
        main: 'index.js',
        license: 'ISC',
        scripts: {
            start: 'webpack-dev-server',
            prePublish: "babel src --out-dir lib --watch"
        },
        dependencies: {},
        devDependencies: {}
    };
    return object(packageJsonTemplate, values);
};

export const setUpReact = (projectPath, projectName, choices, projectDependencies) => {
    const templateDirectory = path.join(process.cwd(), '/templates/react');
    const mainDirectory = path.join(projectPath, 'src/main');
    createDirectory(mainDirectory);
    copyFileOrDir(path.join(templateDirectory,'main/'), mainDirectory);
    initWebPack(projectPath,templateDirectory);
    initbabel(projectPath,templateDirectory);

    const packageJsonObject = resolveTemplate(projectName);

    console.log(packageJsonObject);

    const [unitTest, e2e]  = choices;
    if (unitTest || e2e) {
        const testDirectory = path.join(projectPath, 'src/test');
        createDirectory(testDirectory);
        if (unitTest) {
            copyFileOrDir(path.join(templateDirectory, 'test/unit'), path.join(testDirectory, 'unit'));
            packageJsonObject['jest'] = {
                roots: ['<rootDir>/src/test/unit'],
                testRegex: '/.*-spec\\.(js)$',
                moduleNameMapper: {
                    '\\.(css|less)$': '<rootDir>/src/test/unit/mocks/styleMock.js'
                }
            }
        }
        if (e2e) {
            copyFileOrDir(path.join(templateDirectory, 'test/e2e'), path.join(testDirectory, 'e2e'));
            copyFileOrDir(path.join(templateDirectory, 'nightwatch.json'), path.join(projectPath, 'nightwatch.json'));
        }
    }

    writeJson(path.join(projectPath, './package.json'), packageJsonObject);
    installNodeDependencies(projectPath, projectDependencies);

    console.log('Congratulation your new project is created in ' , projectPath);
    console.log('run npm start in your project directory');
};
