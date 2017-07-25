import {dependencies} from './dependencies'
import {setUpReact} from './bootStrapReactProject';
import {createDirectory} from './fileUtil';

export const generateProject = (projectPath, projectName, projectType, choices) => {
    const successCallBack = () => console.log('your new project has been created in ===> ' + projectPath + ' directory');
    const initProjectDir = () => {
        createDirectory(projectPath, successCallBack);
    };
    const getProjectDependencies = () => {
        if (dependencies[projectType]) {
            const {general, unitTest, e2e} = dependencies[projectType];
            return [...general, ...unitTest, ...e2e];
        }
        else return [];
    };
    if (projectType == 'React') {
        initProjectDir();
        setUpReact(projectPath, projectName, choices, getProjectDependencies());
    }
    else {
        throw new Error('accelerator-javascript does not support ' + projectType + ' yet');
    }
};

