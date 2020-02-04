export const parse = (str: string, ctx: any) => {
  function replacer(match, p1, p2: string, p3, offset, string) {
    let function_body = `with(ctx){${p2[0] == "#" ? p2.slice(1, p2.length) : "return " + p2}}`;
    /* let function_body: string;
    if ([...p2].shift() == "=") function_body = `return "${ctx[p2.slice(1, p2.length)]}"`;
    else function_body = `return ${p2}`; */
    return Function("ctx", function_body)(ctx) ?? "";
  }
  return str.replace(/(\{\{)(.+?)(\}\})/gms, replacer);
};

export default parse;
