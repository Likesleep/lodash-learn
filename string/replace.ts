// ─────────────────────────────────────────────────────────────────────────────
// 描述：替换字符串中匹配的子字符串
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────

// (string: string, pattern: RegExp | string, replacement: ReplaceFunction | string): string

// string: string
// pattern: RegExp | string
// replacement: ReplaceFunction | string
// ─────────────────────────────────────────────────────────────────────────────
import { replace } from "lodash-es";



// 原始字符串
const str = "Foo Bar";
const str1 = "Faa Bar";
const str2 = "FaaBar";

// ─────────────────────────────────────────────────────────────────────────────
// 1.使用字符串匹配替换字符串
// ─────────────────────────────────────────────────────────────────────────────
// console.log(
//     replace(str, "Bar", "Foo"),
// );

// ─────────────────────────────────────────────────────────────────────────────
// 2.使用正则匹配替换字符串
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    replace(str1, "/a{2}/", "o"),
    replace(str2, "/a/", "o"),
);