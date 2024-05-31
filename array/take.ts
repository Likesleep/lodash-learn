// ─────────────────────────────────────────────────────────────────────────────
// 描述：返回一个获取数组前指定个数元素的新数组
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param array The array to query.
// * @param n The number of elements to take.

// <T>(array, n?): T[]

// array: 
// List<T> | null | undefined
// n?: 
// number
// ─────────────────────────────────────────────────────────────────────────────
import { take } from "lodash-es";



// 原始集合
const arr = [1, 1, 1, 3, 3, 3, 2, 2, 2];

// ─────────────────────────────────────────────────────────────────────────────
// 获取数组元素
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    take(arr),
    take(arr, 2),
);

// [ 1 ] 
// [ 1, 1 ]