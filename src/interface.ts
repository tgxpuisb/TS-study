interface Inter {
    label: string
    width?: number
}

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