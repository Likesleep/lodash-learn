// ─────────────────────────────────────────────────────────────────────────────
// 描述：通过指定函数创建对象，其中键是根据指定函数计算出的值，值则为集合中元素
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param iteratee The function invoked per iteration.

// <T>(collection: List<T> | null | undefined, iteratee?: ValueIterateeCustom<T, PropertyName>): Dictionary<T>

// collection:
// List<T> | null | undefined
// iteratee?:
// ValueIterateeCustom<T, PropertyName>
// ─────────────────────────────────────────────────────────────────────────────
import { keyBy } from "lodash-es";



// 原始集合
const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

// ─────────────────────────────────────────────────────────────────────────────
// 通过指定函数构造键值
// ─────────────────────────────────────────────────────────────────────────────

console.log(
    keyBy(users, function (value) {
        return value.user;
    })
);

// {
//   fred: { user: 'fred', age: 40 },   
//   barney: { user: 'barney', age: 36 }
// }