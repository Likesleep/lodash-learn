// ─────────────────────────────────────────────────────────────────────────────
// 描述：根据路径获取对象值
//      若路径解析到的值为函数，则返回将this绑定到此函数执行后得到的值
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param object The object to query.
// * @param path The path of the property to resolve.
// * @param defaultValue The value returned if the resolved value is undefined.

// <TResult>(object: any, path: PropertyPath, defaultValue?: TResult | ((...args: any[]) => TResult)): TResult

// object:
// any
// path:
// PropertyPath
// defaultValue?:
// TResult | ((...args: any[]) => TResult)
// ─────────────────────────────────────────────────────────────────────────────
import { result } from "lodash-es";



// 原始对象
const obj = {
    a: {
        c: 1
    },
    b: [1, {
        d: [1, 2, 3]
    }, { e: getDefault }],
}

// ─────────────────────────────────────────────────────────────────────────────
// 获取对象指定路径值
// ─────────────────────────────────────────────────────────────────────────────

function getDefault(this: any) {
    return this;
}

console.log(
    result(obj, "a.c"),
    result(obj, ["b", "1", "d", "1"]),
    result(obj, "a.b"),
    result(obj, "a.b", "defaultValue"),
    result(obj, "a.b[2]", getDefault()),
);
// 1
// 2
// undefined
// defaultValue
// undefined