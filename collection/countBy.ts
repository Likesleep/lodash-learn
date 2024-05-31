// ─────────────────────────────────────────────────────────────────────────────
// 描述：对集合按照分组函数进行分组，并返回一个计算每个分组中的元素数量的对象。
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param iteratee The function invoked per iteration.

// <T>(collection, iteratee?): Dictionary<number>

// collection: 
// T | null | undefined
// iteratee?:
// ValueIteratee<T[keyof T]>
// ─────────────────────────────────────────────────────────────────────────────
import { countBy } from "lodash-es";



// 原始集合
const words = ["one", "two", "three"];

const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];

// ─────────────────────────────────────────────────────────────────────────────
// 1. 对指定属性进行计数
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    countBy(words, "length")
);


// ─────────────────────────────────────────────────────────────────────────────
// 2. 按照所给分组函数进行分组
// ─────────────────────────────────────────────────────────────────────────────
type user = {
    user: string,
    age: number
}
function ageGt40(o: user) {
    return o.age >= 40;
}

console.log(
    countBy(users, ageGt40)
);