// ─────────────────────────────────────────────────────────────────────────────
// 描述：将字符串末尾填充字符至指定长度
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param string The string to pad.
// * @param length The padding length.
// * @param chars The string used as padding.

// (string?: string, length?: number, chars?: string): string

// string?: string
// length?: number
// chars?: string
// ─────────────────────────────────────────────────────────────────────────────
import { padEnd } from "lodash-es";



// 原始字符串
const str = "Foo Bar";

// ─────────────────────────────────────────────────────────────────────────────
// 1.填充指定长度 (默认填充字符为空格)
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    padEnd(str, 10),
);
// Foo Bar   

// ─────────────────────────────────────────────────────────────────────────────
// 2.填充指定字符串
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    padEnd(str, 10, "*"),
);

// Foo Bar***