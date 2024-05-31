// ─────────────────────────────────────────────────────────────────────────────
// 描述：创建一个数组，该数组值为目标对象的可枚举属性键名
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param object The object to query.

// (object?: any): string[]

// object?:
// any
// ─────────────────────────────────────────────────────────────────────────────
import { keys } from "lodash-es";


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
// 返回一个对象的可枚举属性键名数组
// ─────────────────────────────────────────────────────────────────────────────
console.log("%o",
    keys(obj)
);

// [ 'a', 'b' ]