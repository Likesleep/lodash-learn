// ─────────────────────────────────────────────────────────────────────────────
// 描述：将给定的字符串转换为小写
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param string The template string.
    // * @param options The options object.
    // * @param options.escape The HTML "escape" delimiter.
    // * @param options.evaluate The "evaluate" delimiter.
    // * @param options.imports An object to import into the template as free variables.
    // * @param options.interpolate The "interpolate" delimiter.
    // * @param options.sourceURL The sourceURL of the template's compiled source.
    // * @param options.variable The data object variable name.

// (string?: string, options?: TemplateOptions): TemplateExecutor

// string?:
// string
// options?:
// TemplateOptions
// ─────────────────────────────────────────────────────────────────────────────
import { template } from "lodash-es";



// 原始字符串
const str = "Foo Bar";

// ─────────────────────────────────────────────────────────────────────────────
// 转换字符串
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    template(str),
);
