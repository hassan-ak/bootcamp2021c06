# CLI global NPM package

### Steps

1. create and move to new folder using `mkdir cliTestPackage01` and `cd cliTestPackage01`
2. `npm int` to create a npm package

```
{
  "name": "clitestpackage01",
  "version": "1.0.1",
  "description": "Test CLI Package",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Hassan Ali Khan",
  "license": "ISC",
}

```

3. `npm i @types/node` to install node types.
4. create "lib" directory and "greet.ts" in it

```
export function great(): string {
  return "Hello from Hassan";
}

```

5. Transpile the code using `tsc` so "index.js" file is created
6. Create "bin" folder and "index.ts" in it it

```
#!/usr/bin/env node
import { great } from "../lib/great";
let s: string = great();
console.clear();
console.log(s);
// console.log(process.argv);
let arr1: string[] = process.argv.splice(2);
console.log(arr1);

```

7. Transpile the code using `tsc` so "index.js" file is created
8. Update "package.json" with

```
"main": "./lib/great.js",
"bin": {"great" : "./bin/index.js"},
```

9. Publish it using `npm publish --access public`
10. Install using `npm i clitestpackage01 -g`
11. Use the app in the terminal using `great --name Hassan`
12. Output of the above command

```
Hello from Hassan
[ '--name', 'Hassan' ]
```
