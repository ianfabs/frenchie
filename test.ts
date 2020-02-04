import parse from "./mod.ts";
const example = `
<h1>Welcome to {{title}}</h1>
<p>Thank you, {{name}}, for choosing us.</p>
`;

const result = parse(example, {title: "Deck", name: "ian"});

console.log(result);
