// ─────────────────────────────────────────────────────────────────────────────
// 描述：移除字符串两端的指定字符
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param string The string to trim.
// * @param chars The characters to trim.

// (string?: string, chars?: string): string

// string?:
// string
// chars?:
// string
// ─────────────────────────────────────────────────────────────────────────────
import { trim } from "lodash-es";



// 原始字符串
const str = "   Foo Bar   ";
const str1 = "----Foo-Bar----";
const str2 = "___Foo_Bar___";

// ─────────────────────────────────────────────────────────────────────────────
// 1.移除字符串左右两端空白字符
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    trim(str),
);
// Foo Bar

// ─────────────────────────────────────────────────────────────────────────────
// 2.移除字符串左右两端指定字符
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    trim(str1, "-"),
    trim(str2, "_"),
);

// Foo-Bar
// Foo_Bar
