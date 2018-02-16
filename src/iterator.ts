let someArray = [1, "string", false];

for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}
/**
 * 当生成目标为ES5或ES3，迭代器只允许在Array类型上使用。 在非数组值上使用 for..of语句会得到一个错误，就算这些非数组值已经实现了Symbol.iterator属性。
 * 当目标为兼容ECMAScipt 2015的引擎时，编译器会生成相应引擎的for..of内置迭代器实现方式。
 */