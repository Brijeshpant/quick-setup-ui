export const projectChoices = [
    {
        name: 'projectType',
        message: 'Which js project you want to create ?',
        type: 'list',
        choices: ['React', 'Angular']
    },
    {
        name: 'reactDependencies',
        message: 'Selecet you dependencies choices',
        type: 'checkbox',
        choices: ['unitTest', 'e2e'],
        when: function (answers) {
            return answers.projectType === 'React';
        }
    }];

export const projectNameChoice = {
    name: 'projectName',
    message: 'Please provide your new project name?',
    required: true
};
