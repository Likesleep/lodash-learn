// ─────────────────────────────────────────────────────────────────────────────
// 描述：检查集合中是否存在元素符合指定条件，并返回一个boolean结果值
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param predicate The function invoked per iteration.

// <T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean

// collection:
// List<T> | null | undefined
// predicate?:
// ListIterateeCustom<T, boolean>
// ─────────────────────────────────────────────────────────────────────────────

import { some } from "lodash-es";


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

function userAgeGt48(user: user) {
    return user.age > 48;
}

console.log(
    some(users, userAgeGt48),
);