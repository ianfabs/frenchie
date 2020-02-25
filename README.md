# Frenchie
A tiny and very crude pastiche of mustache templating for deno. Not recommended  for production.

## Usage
With a string
```ts
import { parse } from "https://deno.land/x/frenchie/mod.ts";

const template = "<h1>Hello there, {{name}}</h1>";
parse(template, {name: "Wes Bos"}); // => "<h1>Hello there, Wes Bos</h1>"
```
With a file:

*index.hbs*
```hbs
<h1>Hello there, {{name}}</h1>
```

*app.ts*
```ts
import { parse } from "https://deno.land/x/frenchie/mod.ts";
import { readFileStrSync } from "https://deno.land/std/fs/mod.ts";

let file = readFileStrSync(Deno.cwd() + "index.hbs", {encoding: 'utf8'});

parse(file, {name: "Ry"}) // => "<h1>Hello there, Ry</h1>"
```

## Concepts

There are two basic concepts to try and mimic hbs as lazily as possible: **blocks** and **void blocks**.

### Blocks
A block is any `{{}}` region that *will* return a value.

### Void Blocks
A **void** block is a block that *does not* return anything, beause it's encasing function is `void`.
These blocks are created by writing `{{#}}` with whatever you would like after the `#`. Technically, because I'm a terrible programmer,
you could also return code from these blocks. Maybe I'll fix that, or maybe I'll just call it a feature.

## Security Concerns
To make things easier on myself, I used an insecure feature of javascript. It made writing this code a ***lot** easier. I do have plans to think of a way around this limitation in the future. Currently, I don't know any better methods for accomplishing this, so any support is greatly appreciated.

## Neat Examples
```hbs
{{# egg = true }}
{{egg}}
```

```hbs
{{#if (1 < 2) return "fish"; }}
```
