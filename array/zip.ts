// ─────────────────────────────────────────────────────────────────────────────
// 描述：返回一个由输入数组同一索引位置构成的新数组
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param arrays The arrays to process.

// <T>(...arrays): Array<Array<T | undefined>>

// ...arrays:
// Array<List<T> | null | undefined>
// ─────────────────────────────────────────────────────────────────────────────
import { zip } from "lodash-es";



// 原始集合
const arr = [1, 1, 1, 3, 3, 3, 2, 2, 2];
const arr1 = [1, 1, 1, 3, 3, 3, 2, 2, 2];
const arr2 = [1, 1, 1, 3, 3, 3, 2];
const arr3 = [1, 1, 1, 3, 3, 3, 2];

// ─────────────────────────────────────────────────────────────────────────────
// 对多个数组相同索引位置进行合并
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    zip(arr, arr1, arr2, arr3),
);

// [
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [3, 3, 3, 3],
//     [3, 3, 3, 3],
//     [3, 3, 3, 3],
//     [2, 2, 2, 2],
//     [2, 2, undefined, undefined],
//     [2, 2, undefined, undefined]
// ]
