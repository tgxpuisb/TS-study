// 枚举
enum Dir {
    UP = 1,
    DOWN,
    LEFT,
    RIGHT
}

const enum FILE_ACCESS {
    NONE,
    READ = 1 << 1,
    WRITE = 1 << 2,
    READ_WRITE = READ | WRITE
}

// 外部枚举
declare enum Enum {
    A = 1,
    B,
    C = 2
}