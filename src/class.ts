// 类
class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet(): string {
        return `Hello ${this.greeting}`
    }
}
// 继承
class Animal {
    move(distacen: number = 0) {

    }
}
class Dog extends Animal {
    constructor() {
        super()
    }
    bark(): void {
        console.log('Woof')
    }
}

const dog: Dog = new Dog()

// 公共，私有与受保护的修饰符
class Animal2 {
    public name: string
    // 如果构造函数私有,则在类的外部被实例化
    // 如果为保护,则不能直接被实例化
    private constructor (theName: string) {
        this.name = theName
    }
    private _pri: string
    protected _pro: string
}

class Dog2 extends Animal2 {
    constructor(theName: string) {
        super(theName)
        console.log(this._pro)
        // console.log(this._pri)
    }
}

// readonly修饰符

// readonly修饰的类属性必须在申明时或者构造函数里被初始化

// 存取器

// 静态属性

// 抽象类

// 高级技巧