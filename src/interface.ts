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



// 类类型

//继承接口

//混合类型


//接口继承类