// ─────────────────────────────────────────────────────────────────────────────
// 描述：根据指定条件对集合进行分组，其中第一个分组返回满足条件的元素，第二个分组返回不满足条件的元素
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param collection The collection to iterate over.
// * @param callback The function called per iteration.

// <T>(collection: List<T> | null | undefined, callback: ValueIteratee<T>): [T[], T[]]

// collection:
// List<T> | null | undefined
// callback:
// ValueIteratee<T>
// ─────────────────────────────────────────────────────────────────────────────
import { partition } from "lodash-es";


// 原始集合
const users = [
    { 'user': 'fred', 'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred', 'age': 40 },
    { 'user': 'barney', 'age': 36 }
];


// ─────────────────────────────────────────────────────────────────────────────
// 根据指定条件对集合进行分组
// ─────────────────────────────────────────────────────────────────────────────
function userAgeGt36(o: any) {
    return o.age > 36;
}

console.log(
    partition(users, userAgeGt36),
);