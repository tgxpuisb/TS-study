// 函数
/*
function add(x, y) {
    return x + y
}
*/
function add(x: number, y: number): number {
    return x + y
}
// 函数类型

let myAdd = function(x: number, y: number): number {
    return x + y
}

let myAdd2: (x1: number, y1: number) => number = function(x: number, y: number): number {
    return x + y
}

// 可选参数和默认参数
function buildName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName
}

function buildName1(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName
    } else {
        return firstName
    }
}

function buildName2(firstName: string, lastName = 'sims'): string {
    return firstName + ' ' + lastName
}
// 剩余参数

// this

// 重载

