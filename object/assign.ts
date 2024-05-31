// ─────────────────────────────────────────────────────────────────────────────
// 描述：将来源对象的可枚举属性复制到目标对象中
// ─────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// * @param object The destination object.
// * @param [sources] The source objects.

// <TObject, TSource>(object: TObject, source: TSource): TObject & TSource

// object:
// TObject
// source:
// TSource
// ─────────────────────────────────────────────────────────────────────────────
import { assign } from "lodash-es";



// 原始对象
const source = {
    a: 1
};

const source1 = {
    a: 2
}

const target = {
    a: 0
}

// ─────────────────────────────────────────────────────────────────────────────
// 将对象自身可枚举属性赋值给目标对象
// 顺序为从左至右，后面对象会覆盖前面对象的相同属性
// ─────────────────────────────────────────────────────────────────────────────
// console.log(
//     assign(target, source, source1),
// );


// ─────────────────────────────────────────────────────────────────────────────
// 对象继承属性不会复制
// ─────────────────────────────────────────────────────────────────────────────
function Source(this: any) {
    this.a = 1;
}

Source.prototype.b = 1;

function Source1(this: any) {
    this.a = 2;
    this.c = 3;
}
Source.prototype.b = 2;

console.log(
    assign(target, new (Source as any), new (Source1 as any)),
);

// { a: 2, c: 3 }