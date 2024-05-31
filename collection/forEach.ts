// ─────────────────────────────────────────────────────────────────────────────
// 描述：对集合中每个元素调用指定方法
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param iteratee The function invoked per iteration.

// <T>(collection: T[], iteratee?: ArrayIterator<T, any>): T[]

// collection:
// T[]
// iteratee?:
// ArrayIterator<T, any>

// The iteratee is invoked with three arguments:
//          * (value, index|key, collection).
// ─────────────────────────────────────────────────────────────────────────────
import { forEach, upperCase } from "lodash-es";


// 原始集合
const users = [
    {
        'user': 'fred', 'age': 48
    },
    {
        'user': 'barney', 'age': 34
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// 1.获取数组值及索引
// ─────────────────────────────────────────────────────────────────────────────
// console.log(
//     forEach(users, (val, idx) => {
//         console.log(val, idx);
//     }),
// );

// ─────────────────────────────────────────────────────────────────────────────
// 2.使用指定函数操作集合元素
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}

console.log(
    forEach(users, (val: user, idx: number) => {
        val.user = upperCase(val.user);
    }),
);