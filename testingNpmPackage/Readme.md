# Testing NPM local Package

### Steps

1. `mkdir testingNpmPackage` and `cd testingNpmPackage` to create and move to a new directory
2. `npm init` to initilize the project which creates follwoing "pacakge.json" file

```
{
  "name": "testingnpmpackage",
  "version": "1.0.0",
  "description": "Testing Deployed npm package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Hassan Ali Khan",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^16.3.3"
  }
}
```

3. `npm i @hassan-ak/npmtestpackage` to install the recently deployed package in the app.
4. create "index.ts" to use the package

```
import { hello } from "@hassan-ak/npmtestpackage";

hello("Hassan");

```

5. Transpile the code using `tsc` whihc creates "index.js" file
6. Execute the code using `node index.js`
