const inquirer = require('inquirer');
export const promptUser = (schema, callBack) => {
    inquirer.prompt(schema).then((result) => callBack(result));
};
