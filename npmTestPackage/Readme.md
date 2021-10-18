# Publish NPM Package (Local)

This is a test package to be published on npm. It is just a hello world programe While using it use your name or any string in the hello function.

- Package is published and can be used by using "npm i @hassan-ak/npmtestpackage"

## Steps

1. Setup a new user Account: https://www.npmjs.com/
2. create and move to new folder using `mkdir npmTestPackage` and `cd npmTestPackage`
3. `npm int --scope=hassan-ak` to initialize a project. This will create a package.jspn file with the following content

```
{
  "name": "@hassan-ak/npmtestpackage",
  "version": "1.0.0",
  "description": "Test Package for npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Hassan Ali Khan",
  "license": "ISC"
}

```

4. `npm i @types/node` to install node types.
5. Create "index.ts" with the follwoing piece of code.

```
export function hello(name: string) {
  console.clear();
  console.log("**********");
  console.log(`Hello World from ${name}`);
  console.log("**********");
}
```

6. Transpile the code using `tsc` whihc will create a "index.js" file.
7. `npm adduser` to login to the npmjs with username, password and email.
8. `npm publish --access public` to publish it as a public local package.
