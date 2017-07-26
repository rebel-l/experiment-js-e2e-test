const fs = require('fs');

const nodeModulesPath = './node_modules';
const binPath = nodeModulesPath + '/.bin';
const webdriverManagerDriversPath = nodeModulesPath + '/webdriver-manager/selenium';

fs.readdir(webdriverManagerDriversPath,(err, files) => {
    // console.log(files);
    files.forEach(file => {
        let fileWithPath = webdriverManagerDriversPath + '/' + file;
        try {
            let stats = fs.statSync(fileWithPath);
            if (stats.mode !== 33261) { // skip files that are not executable
                return;
            }

            let newFilename = /[A-Za-z]*/.exec(file)[0];
            newFilename = binPath + '/' + newFilename;
            fs.linkSync(fileWithPath, newFilename);
            console.log('Link "' + fileWithPath + '" to "'  + newFilename + '"');
        } catch (err) {
            console.log('File "' + fileWithPath + '" caused an error: ' + err);
        }

    });
});