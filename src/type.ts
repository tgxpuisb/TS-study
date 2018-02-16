// 类型推论
window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button)  //<- Error
}

// 高级类型
/// 交叉类型,将多个类型合并成一个类型

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

// 简单来说就是将两个对象混合在一起

/// 联合类型

function padLeft(value: string, padding: string | number) {

}

// 类型保护与区分类型

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}