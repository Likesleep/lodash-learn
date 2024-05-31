// ─────────────────────────────────────────────────────────────────────────────
// 描述：对集合按照分组函数进行分组，并返回一个包含分组标准及分组元素数组的对象
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param iteratee The function invoked per iteration.

// <T>(collection, iteratee?): Dictionary<Array<T[keyof T]>>

// collection: 
// T | null | undefined
// iteratee?:
// ValueIteratee<T[keyof T]>
// ─────────────────────────────────────────────────────────────────────────────
import { groupBy } from "lodash-es";



// 原始集合
const words = ["one", "two", "three"];

const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

// ─────────────────────────────────────────────────────────────────────────────
// 1. 对指定属性进行分组统计
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    groupBy(words, "length")
);


// ─────────────────────────────────────────────────────────────────────────────
// 2. 按照所给分组函数进行分组统计
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}
function ageGt40(o: user) {
    return o.age >= 40;
}

console.log(
    groupBy(users, ageGt40)
);