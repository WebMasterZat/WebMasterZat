// 9) Обобщения (Generics): Создайте обобщенную функцию, которая принимает аргумент определенного типа и возвращает его.
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");  // тип: string
let output2 = identity<number>(100);  // тип: number