// ─────────────────────────────────────────────────────────────────────────────
// 描述：将给定的字符串重复指定次数
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param string The string to repeat.
// * @param n The number of times to repeat the string.

// (string?: string, n?: number): string

// string?:
// string
// n?:
// number
// ─────────────────────────────────────────────────────────────────────────────
import { repeat } from "lodash-es";



// 原始字符串
const str = "Foo Bar";

// ─────────────────────────────────────────────────────────────────────────────
// 将字符串重复输出
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    repeat(str, 2),
);

// Foo BarFoo Bar