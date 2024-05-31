// ─────────────────────────────────────────────────────────────────────────────
// 描述：对集合中每个元素调用指定方法
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param iteratee The function invoked per iteration.

// <T, TResult>(collection: T[] | null | undefined, iteratee: ArrayIterator<T, TResult>): TResult[]

// collection:
// T[] | null | undefined
// iteratee:
// ArrayIterator<T, TResult>
// ─────────────────────────────────────────────────────────────────────────────
import { map } from "lodash-es";


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
// 使用自定义函数修改数组
// ─────────────────────────────────────────────────────────────────────────────
function numPlus20(user: any) {
    user.age += 20
    return user;
}

console.log(
    map(users, numPlus20),
);
