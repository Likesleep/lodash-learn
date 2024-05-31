// ─────────────────────────────────────────────────────────────────────────────
// 描述：根据路径获取对象值
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param object The object to query.
// * @param path The path of the property to get.
// * @param defaultValue The value returned if the resolved value is undefined.

// (object: any, path: PropertyPath, defaultValue?: any): any

// object:
// any
// path:
// PropertyPath
// defaultValue?:
// any
// ─────────────────────────────────────────────────────────────────────────────
import { get } from "lodash-es";



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
// 获取对象指定路径值
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    get(obj, "a.c"),
    get(obj, ["b", "1", "d", "1"]),
    get(obj, "a.b"),
    get(obj, "a.b", "defaultValue"),
);
// 1
// 2
// undefined
// defaultValue