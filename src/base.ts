// 基础类型

let isDone: boolean = true

// 数字

let dec: number = 5
let hex: number = 0xf00

// 字符串

let str: string = 'hehe'
let theName: string = `a ${str}`

// 数组

let list: number[] = [1, 2, 3]

// 数组泛型

let list1: Array<number> = [1, 2, 3]

// 元组

let x: [string, number] = ['s', 1]
// 当元组越界,会使用联合类型替代
x[2] = 1

// 枚举
// 枚举是对JavaScript数据类型的补充 //默认情况下从0开始编号, 你也可以对某个元素进行赋值,会改变这种操作
enum Color {Red, Green, Blue}

let c: Color = Color.Green

enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c1: Color = Color.Green

// Any

let notSure: any = 4
notSure = '4'

let l: any[] = [1, 's', '3']

// Void
// Void表示一个函数没有任何返回值 Void可以被赋予null和undefined

function someF1 (): void {
    alert('hehe')
}

// null和undefined
// 在TS中  null和undefined是其他类型的子类型, 也就是说可以做如下操作

let test: number = undefined

// 在编译的时候如果指定了--strictNullChecks标记就意味着不能像上面那么干了,他们只能被赋值成void类型

// never 表示永远不存在的返回值,比如一个函数总是会抛出错误,或者是node中的死循环的时候

function loop (): never {
    while (true) {

    }
}

// 类型断言
/**
 * 如果你比TS自己还了解某个值的信息(传说中的你比编译器聪明),此时你可以采用一种叫类型断言的操作,这好比其他语言中的强制类型转化
 */

let someValue: any = 'this is str'
let strLen: number = (<string>someValue).length
let strlen: number = (someValue as string).length