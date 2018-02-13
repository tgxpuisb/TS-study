// 变量声明

function someF(num: number, matrix: number[][]): any {

}

// 解构

function foo([first, ...last]: [number, number]): any {
    // 解构类型声明是 number 但是 参数last却显示出数组的推断,不懂了
    // foo([1,2,3])报错  foo([1,2])正常
    // TS对参数有严格的数量限制?不懂
}
// foo([1,2,3])

let o = {
    a: "foo",
    b: 12,
    c: "bar"
}
let {a, b}: {a: string, b: number} = o

// TS不允许展开泛型类型的参数

type C = {a: string, b?: number}

function cc({a, b}: C): void {

}
// 但是，通常情况下更多的是指定默认值，解构默认值有些棘手。 首先，你需要在默认值之前设置其格式。

function cc1({a, b}: {a: '', b: 1}): void {

}

function cc2({a, b = 1}: C): void {

}