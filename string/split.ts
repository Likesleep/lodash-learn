// ─────────────────────────────────────────────────────────────────────────────
// 描述：根据指定的分隔符将字符串分割成数组
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param string The string to split.
// * @param separator The separator pattern to split by.
// * @param limit The length to truncate results to.

// (string: string | null | undefined, separator?: RegExp | string, limit?: number): string[]

// string:
// string | null | undefined
// separator?:
// RegExp | string
// limit?:
// number
// ─────────────────────────────────────────────────────────────────────────────
import { split } from "lodash-es";



// 原始字符串
const str = "Foo Bar";
const str1 = "Faa-Bar-dasdas";
const str2 = "Faa-Bar____dasdas";

// ─────────────────────────────────────────────────────────────────────────────
// 1.根据分隔符分割字符串
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    split(str, " "),
);

// ─────────────────────────────────────────────────────────────────────────────
// 2.指定分隔符及分隔次数
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    split(str1, "-", 2),
    split(str2, "-", 2),
);
