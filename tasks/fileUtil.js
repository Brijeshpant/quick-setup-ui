const fs = require('fs-extra');

const createFile = (file) => {
    fs.ensureFileSync(file, err => {
        return console.log(err);
    });
};

export const createDirectory = (file, callBack) => {
    fs.ensureDir(file, err => {
        if(err) return console.log(err);
        if(callBack) {
             callBack();
        }
    });
};

export const copyFileOrDir = (source, destination) => {
    console.log('copy file ' + source + ' to ' + destination);
    fs.copy(source, destination, err => {
        if (err) return console.error(err);
        return console.log('success!');
    });
}

export const writeJson = (file, data) => {
    createFile(file);
    fs.writeJson(file, data, err => {
        if (err) return console.error(err);
    });

}
