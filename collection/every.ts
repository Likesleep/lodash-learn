// ─────────────────────────────────────────────────────────────────────────────
// 描述：检查集合中是否所有元素符合指定条件，并返回一个boolean结果值
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param predicate The function invoked per iteration.

// <T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean

// collection: 
// T | null | undefined
// predicate?:
// ObjectIterateeCustom<T, boolean>
// ─────────────────────────────────────────────────────────────────────────────

import { every } from "lodash-es";


// 原始集合
const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];


// ─────────────────────────────────────────────────────────────────────────────
// 使用条件函数检查集合
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}

function userAgeGt36(user: user) {
    return user.age >= 34;
}

console.log(
    every(users, userAgeGt36),
);