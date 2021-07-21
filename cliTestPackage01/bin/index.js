#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var great_1 = require("../lib/great");
var s = great_1.great();
console.clear();
console.log(s);
// console.log(process.argv);
var arr1 = process.argv.splice(2);
console.log(arr1);
