interface Inter {
    label: string
    width?: number
}
// readonly属性
interface Pointer {
    readonly x: number
    readonly y: number
}

let p1: Pointer = {
    x: 12,
    y: 20
}

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 100)
}


function printLabel (labelledObj: { label: string }) {
    console.log(labelledObj.label)
}

let myObj = {
    size: 10,
    label: 'test string'
}
printLabel(myObj)

// readonly能够锁死对象中的属性,比const更近了一步

// 可选属性

interface SquareConfig {
    color?: string
    width?: number
}

function createSquare (config?: SquareConfig): {color: string, area: number} {
    let newSquare = {
        color: 'White',
        area: 100
    }
    if (config.color) {
        newSquare.color = config.color
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare
}

createSquare()

interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

let SquareConfig2Obj: SquareConfig2 = {
    a: 1
}


//函数类型
interface SearchFunc {
    (num: number, source: string): any
}

let search: SearchFunc

search = function (num: number, source: string): boolean {
    return true
}

//可索引的类型 
interface StringArray {
    [index: number]: string
}

let myAry: StringArray = ['s', '2']
let myStr = myAry[1]
// 在这里其实会转化成对象"1",所以使用的时候要注意


// 类类型
// 实现接口
interface base {
    currentTime: Date
}
class hehe implements base {
    currentTime: Date
}

interface ClockConstructor {
    new (hour: number, min: number): ClockInterface
}
interface ClockInterface {
    tick(): any
}
function createClock (ctor: ClockConstructor, hour: number, min: number): ClockInterface {
    return new ctor(hour, min)
}
class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
let digital = createClock(DigitalClock, 12, 17)

//继承接口  一个接口可以集成多个接口
interface Shape {
    color: string
}
interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number
}
let square = <Square>{}
square.color = 'blue'
square.sideLength = 10


//混合类型
// 因为JS中函数是对象,所以函数上面可以挂载属性,同时函数有可以自己调用(比如$),这在TS里面容易爆炸,所以可以如下定义

interface Counter {
    (start: number): void
    interval: number,
    reset(): void
}

let $ = <Counter>function(start: number): void {}
$.interval = 123
$.reset = function(): void {}


//接口继承类
class Control {
    private state: any
    protected test: any
}

interface SelectableControl extends Control {
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}