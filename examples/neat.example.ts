import { parse } from "../mod.ts";

const template1 = `
{{# egg = true }}
{{egg}}
`;

console.log(parse(template1, {}));

const template2 = `
{{#
  if (name == "Wes") return "fish";
  else return "horse";
}}
`;

console.log(parse(template2, {name: "Ian"}));
