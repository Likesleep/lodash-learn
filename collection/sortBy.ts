// ─────────────────────────────────────────────────────────────────────────────
// 描述：根据指定的条件对集合进行排序，并返回排序后的新数组。
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * 入参
// * @param collection The collection to iterate over.
// * @param [iteratees=[_.identity]]
// *  The iteratees to sort by, specified individually or in arrays.

// <T>(collection, ...iteratees): Array<T[keyof T]>

// collection: 
// T | null | undefined, 
// ...iteratees:
// Array<Many<ObjectIteratee<T>>>
// ─────────────────────────────────────────────────────────────────────────────

import { sortBy } from "lodash-es";


// 原始集合
const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];


// ─────────────────────────────────────────────────────────────────────────────
// 1.单字段排序
// ─────────────────────────────────────────────────────────────────────────────
// console.log(
//     sortBy(users, "user")
// );

// ─────────────────────────────────────────────────────────────────────────────
// 2.多字段排序
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    sortBy(users, ["user", "age"])
);
console.log(sortBy(users, 'user', function (o) {
    return Math.floor(o.age / 10);
}))
// [
//     { user: 'barney', age: 34 },
//     { user: 'barney', age: 36 },
//     { user: 'fred', age: 40 },
//     { user: 'fred', age: 48 }
// ]
// [
//     { user: 'barney', age: 34 },
//     { user: 'barney', age: 36 },
//     { user: 'fred', age: 48 },
//     { user: 'fred', age: 40 }
// ]

// ─────────────────────────────────────────────────────────────────────────────
// 3.根据指定排序函数排序
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}
function sortByRoundAge(o: user) {
    return Math.round(o.age / 10);
}
// console.log(
//     sortBy(users, sortByRoundAge)
// );