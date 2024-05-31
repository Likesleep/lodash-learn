// ─────────────────────────────────────────────────────────────────────────────
// 描述：返回一个由所有给定数组中不同时出现的元素所组成的新数组
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param arrays The arrays to inspect.

// <T>(...arrays: Array<List<T> | null | undefined>): T[]

// ...arrays:
// Array<List<T> | null | undefined>
// ─────────────────────────────────────────────────────────────────────────────
import { xor } from "lodash-es";



// 原始集合
const arr = [1, 1, 1, 3, 3, 3, 2, 2, 2];
const arr1 = [1, 1, 1, 3, 3, 3, 2, 2, 2];
const arr2 = [1, 1, 1, 3, 3, 3, 2];
const arr3 = [1, 1, 1, 3, 3, 3, 2];
const arr4 = [0, 1, 3, 2];

// ─────────────────────────────────────────────────────────────────────────────
// 返回一个在所有给定数组中不同时出现的元素所组成的新数组
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    xor(arr, arr1, arr2, arr3, arr4),
);

// [0]