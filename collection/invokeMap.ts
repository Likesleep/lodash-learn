// ─────────────────────────────────────────────────────────────────────────────
// 描述：对集合中每个元素调用指定方法
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param methodName The name of the method to invoke.
// * @param args Arguments to invoke the method with.

// (collection: object | null | undefined, methodName: string, ...args: any[]): any[];

// collection:
// object | null | undefined
// methodName:
// string
// ...args:
// any[]
// ─────────────────────────────────────────────────────────────────────────────
import { invokeMap, upperFirst } from "lodash-es";


// 原始集合
const strArr = ['fred', 'barney'];

const users = [
    {
        'user': 'fred', 'age': 48
    },
    {
        'user': 'barney', 'age': 34
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// 1.使用已存在函数
// ─────────────────────────────────────────────────────────────────────────────

console.log(
    invokeMap(strArr, "toUpperCase"),
);

// ─────────────────────────────────────────────────────────────────────────────
// 2.使用自定义函数
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}

function upperName(this: user) {
    this.user = upperFirst(this.user)
    return this;
}

console.log(
    invokeMap(users, upperName),
);