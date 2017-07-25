'use strict';
import {promptUser} from './userInput';
import {generateProject} from './projectGenerator';
import {projectNameChoice, projectChoices} from './userChoices.js';
const path = require('path');
const fs = require('fs-extra');

const init = () => {
    const initProjectCreation = (answers) => {
        const {projectName} = answers;
        let pathToPreviousDirectory = path.join(process.cwd(), '../');
        const projectPath = pathToPreviousDirectory + projectName;
        promptUser(projectChoices, userChoices(projectPath, projectName));
    };
    promptUser(projectNameChoice, initProjectCreation);
};

init();

const userChoices = (projectPath, projectName) => {
    const handleSelectedOptions = (answers) => {
        const {projectType, reactDependencies, angularDependencies} = answers;
        console.log(projectPath);
        console.log(projectType);
        console.log(reactDependencies);
        console.log(angularDependencies);
        const choices = reactDependencies ? reactDependencies : angularDependencies;
        generateProject(projectPath, projectName, projectType, choices);
    };
    return handleSelectedOptions;
};


