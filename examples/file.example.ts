import { parse } from "../mod.ts";
import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

let file = readFileStrSync(Deno.cwd() + "/examples/index.hbs", {encoding: 'utf8'});

console.log(parse(file, {name: "Ry"})) // => "<h1>Hello there, Ry</h1>"
