// Обобщенный тип или "Generics"
function Nm<T>(m: T): T {
    return m
}
function getFirstElement<T>(array: T[]): T {
    return array[0];
}

const firstNumber = getFirstElement([1, 2, 3]); // тип number
const firstString = getFirstElement(["a", "b", "c"]); // тип string