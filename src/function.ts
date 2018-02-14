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

function buildName3(firstName: string, ...restOfName: string[]): string {
    return firstName + ' ' + restOfName.join(' ')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName3

// this

// 重载
// 重载函数之后,为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，一定要把最精确的定义放在最前面。
// 用这样的方法可以改写一些参数不正确的基础库

let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number; }[]): number
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}