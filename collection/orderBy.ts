// ─────────────────────────────────────────────────────────────────────────────
// 描述：用于根据指定的条件对集合进行排序，并返回排序后的新数组。
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * 入参
// * @param {Array|Object} collection The collection to iterate over.
// * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
// *  The iteratees to sort by.
// * @param {string[]} [orders] The sort orders of `iteratees`.

// 此处使用存疑
// * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.

// <T extends object>(collection, iteratees?, orders?): Array<T[keyof T]>;

// collection: 
// T | null | undefined
// iteratees?: 
// Many<ObjectIterator<T, NotVoid>>
// orders?: 
// Many<boolean|"asc"|"desc">
// ─────────────────────────────────────────────────────────────────────────────

import { orderBy } from "lodash-es";


// 原始集合
const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];


// ─────────────────────────────────────────────────────────────────────────────
// 1. 单属性排序
// ─────────────────────────────────────────────────────────────────────────────
// console.log(
//     orderBy(users, "age"),
//     orderBy(users, ["age"], ["asc"])
// );

// ─────────────────────────────────────────────────────────────────────────────
// 2. 多属性排序
// ─────────────────────────────────────────────────────────────────────────────
// console.log(
//     orderBy(users, ["user", "age"], ["asc", "desc"])
// );
// [
//     { user: 'barney', age: 36 },
//     { user: 'barney', age: 34 },
//     { user: 'fred', age: 48 },
//     { user: 'fred', age: 40 }
// ]


// ─────────────────────────────────────────────────────────────────────────────
// 3. 根据指定排序函数排序
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}
function orderByUser(o: user) {
    return o.user;
}
function orderByAgeGt40(o: user) {
    return o.age >= 40;
}
console.log(
    orderBy(users, orderByUser, ["asc"]),
    orderBy(users, orderByAgeGt40, ["asc"]),
);