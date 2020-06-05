# Cypress example
This is a cypress web e2e example. All the test are located in `/cypress/integration/`
Feel free to edit the scripts in `package.json` file to run the tests.

For install the proyect use:
  `npm install`

## Visual Testing
For config your visual testing use: `npx eyes-setup`

Go to [applitools](https://eyes.applitools.com), create an account, sing in, go to profile icon and click over **My API key**, copy that key. 🕵🏾‍♀️ You will need it for set your `APPLITOOLS_API_KEY`

After that, you can set up the `APPLITOOLS_API_KEY` enviroment variable to allow run your visual test:

> in unix base systems you can use the folow command:

`export APPLITOOLS_API_KEY=\YOUR_API_KEY`

> Windows CMD

`set APPLITOOLS_API_KEY="YOUR_API_KEY"`

> Windows PowerShell

` $env:APPLITOOLS_API_KEY="YOUR_API_KEY"`


## Runing the Tests

For run the test you can use:
  `npm run cypress`
