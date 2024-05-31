// ─────────────────────────────────────────────────────────────────────────────
// 描述：设置对象对应路径值
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param object The object to modify.
// * @param path The path of the property to set.
// * @param value The value to set.

// <T extends object>(object: T, path: PropertyPath, value: any): T

// object:
// T
// path:
// PropertyPath
// value:
// any
// ─────────────────────────────────────────────────────────────────────────────
import { set } from "lodash-es";


// 原始对象
const obj = {
    a: {
        c: 1
    },
    b: [1, {
        d: [1, 2, 3]
    }, 3],
}

// ─────────────────────────────────────────────────────────────────────────────
// 1.路径已存在
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    set(obj, "a.c", "2"),
);
// { a: { c: '2' }, b: [ 1, { d: [1, 2, 3] }, 3 ] }

// ─────────────────────────────────────────────────────────────────────────────
// 2.路径不存在
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    set(obj, "a.d", "3"),
);
// { a: { c: '2', d: '3' }, b: [ 1, { d: [1, 2, 3] }, 3 ] }