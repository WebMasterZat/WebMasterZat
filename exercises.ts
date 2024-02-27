// 1) Простые типы данных: Объявите переменные следующих типов: boolean, number, string.
let isDone: boolean;
let decimal: number;
let color: string;

// 2) Массивы: Объявите массив чисел и массив строк.
let list: number[] = [1, 2, 3]
let names: string[] = ['red', 'green'];

// 3) Перечисления (Enum): Создайте перечисление для дней недели.
enum WeekDays {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

// 4) Any: Объявите переменную типа any.
let test: any

// 5) Void: Создайте функцию, которая не возвращает значение.
function testFunc(): void {

}

// 6) Объекты: типизировать объект
let person: { name: String, age: number } = {name: 'Alex', age: 31};

// 7) Интерфейсы: Создайте интерфейс для объекта выше
let user: { name: String, age: number } = {name: 'Alex', age: 31};

interface Person {
    name: string;
    age: number;
}

// 8) Функции: Создайте функцию, которая принимает два числа и возвращает их сумму. Укажите типы для аргументов и возвращаемого значения.
function Ab(a: number, b: number): number {
    return a + b;
}

// 9) Обобщения (Generics): Создайте обобщенную функцию, которая принимает аргумент определенного типа и возвращает его.
function Nm<T>(m: T): T {
    return m
}
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // тип number
const firstString = getFirstElement(["a", "b", "c"]); // тип string

// добавишь в этот файл функцию из упражнений (9)
//
// а массивы удалишь