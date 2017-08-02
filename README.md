[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# experiment-js-e2e-test
This is a prototype of doing end-to-end (e2e) tests in/on different browsers/devices with javascipt.

# Requirements

* [NodeJS > 8.1.4](https://nodejs.org/): _may it's working with a lower version_
* [Yarn](https://yarnpkg.com): _you can use NPM instead, but I used yarn_

# Install

To get ready you need to run some commands. First of all install the _packages_:

```
yarn install
```

The next step is to update the _webdriver-manager_ and link the browser specific drivers to the node modules bin path.
To have it easy I have written some _NPM/Yarn scripts_:

```
yarn run build
``` 

# Execute Tests

Before you are able to run tests you need to start the webdriver:

```
./node_modules/.bin/webdriver-manager start
```

You can check if the webdriver is running on [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub). To check
if the webdriver can be used from the scripts execute the following script:

```
node ./tests/webdriver-check.js
```

That script should connect with the selenium webdriver, open a chrome browser and load a page. After that it should
be closed properly.

To work with Jest as testing framework there is a test script in the _tests_ directory. To run the tests just call

```
./node_modules/.bin/jest
```

Jest should now open a browser, load a page and do some validations on it.