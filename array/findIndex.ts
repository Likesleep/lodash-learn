// ─────────────────────────────────────────────────────────────────────────────
// 描述：返回满足条件的第一个数组元素的索引值
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param array The array to search.
// * @param predicate The function invoked per iteration.
// * @param fromIndex The index to search from.

// <T>(array: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>, fromIndex?: number): number

// array:
// List<T> | null | undefined
// predicate?:
// ListIterateeCustom<T, boolean>
// fromIndex?:
// number
// ─────────────────────────────────────────────────────────────────────────────
import { findIndex } from "lodash-es";



// 原始集合
const arr = [1, 1, 1, 3, 3, 3, 2, 0, 2, 4];

// ─────────────────────────────────────────────────────────────────────────────
// 指定函数查找索引值
// ─────────────────────────────────────────────────────────────────────────────
function valueGt4(x: number) {
    return x >= 4;
}

console.log(
    findIndex(arr, valueGt4),
);
