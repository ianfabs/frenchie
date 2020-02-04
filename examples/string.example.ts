import { parse } from "../mod.ts";

const template = "<h1>Hello there, {{name}}</h1>";
console.log(parse(template, {name: "Wes Bos"})); // => "<h1>Hello there, Wes Bos</h1>"
