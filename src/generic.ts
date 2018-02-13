// 泛型

/**
 * 软件工程中,我们不仅要创建一致的定义良好的API,同时也要考虑可重用性.组件不仅能够支持当前的数据类型,同时也能支持未来的数据类型,这在创建大型系统时为你提供了十分灵活的功能
 * 在像C#和Java这样的语言中,可以使用泛型来创建可重用的组件,一个组件可以支持多种类型的数据.这样用户就可以以自己的数据类型来使用组件.
 */

// 泛型之Hello World

function identity<T>(arg: T): T {
    return arg
}

let output = identity<string>('myString')
// 指定T的类型之后,传递参数
let output1 = identity('str')
// 如果是简单类型的话,可以进行类型推断

// 使用泛型变量

function logging<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}

// 泛型类型
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity2<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity2;

myIdentity(2)

// 泛型类

class GenericNumber<T, U> {
    zeroValue: T
    oneValue: U
    add: (x: T, y: T) => T
}

let ins = new GenericNumber<number, string>()

// 泛型约束
interface Len {
    length: number
}
function log<T extends Len>(arg: T): T {
    console.log(arg.length)
    return arg
}

// 类类型 不太懂
function create<T>(c: {new(): T; }): T {
    return new c();
}