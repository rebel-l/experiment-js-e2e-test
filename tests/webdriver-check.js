'use strict';
const webdriver = require('selenium-webdriver');

(function extendPath() {
    let pathOfDrivers = process.cwd() + '/node_modules/.bin';
    process.env['PATH'] = process.env['PATH'] + ':' + pathOfDrivers;
})(); // should be part of a global application or application config


const browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
try {
    browser.navigate().to('http://www.home24.de');
    browser.close();
} catch (err) {
    console.log('Abnormal termination! Reason: ' + err);
    browser.close();
};


