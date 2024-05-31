// ─────────────────────────────────────────────────────────────────────────────
// 描述：使用指定函数遍历对象自身和继承的可枚举属性
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param object The object to iterate over.
// * @param iteratee The function invoked per iteration.

// <T>(object: T, iteratee?: ObjectIterator<T, any>): T

// object:
// T
// iteratee?:
// ObjectIterator<T, any>
// ─────────────────────────────────────────────────────────────────────────────
import { forIn } from "lodash-es";


function Bar(this: any) {
    this.a = 1;
}
Bar.prototype.b = 2;

// ─────────────────────────────────────────────────────────────────────────────
// 使用指定函数遍历对象自身和继承的可枚举属性
// ─────────────────────────────────────────────────────────────────────────────
console.log(
    forIn(new (Bar as any), function (val, key, obj) {
        console.log(key);
    })
);

// a
// b
// Bar { a: 1 }