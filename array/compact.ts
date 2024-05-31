// ─────────────────────────────────────────────────────────────────────────────
// 描述：返回一个过滤掉所有“falsy”值的新数组
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param array The array to compact.

// <T>(array: List<T | Falsey> | null | undefined): T[];

// array: 
// List<T | Falsey> | null | undefined
// ─────────────────────────────────────────────────────────────────────────────
import { compact } from "lodash-es";



// 原始集合
const arr = [1, 0, false, null, undefined, NaN, "", 3, 4];

// ─────────────────────────────────────────────────────────────────────────────
// 过滤数组falsey值
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    compact(arr),
);