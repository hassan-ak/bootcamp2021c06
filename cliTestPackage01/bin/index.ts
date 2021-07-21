#!/usr/bin/env node

import { great } from "../lib/great";

let s: string = great();

console.clear();

console.log(s);

// console.log(process.argv);

let arr1: string[] = process.argv.splice(2);

console.log(arr1);
