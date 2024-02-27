// Обобщенный тип или "Generics"
let numbers: Array<number> = [0, 1, 2];
let strings: Array<string> = ['a', 'b', 'c'];

function Nm<T>(m: T): T {
    return m
}
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // тип number
const firstString = getFirstElement(["a", "b", "c"]); // тип string