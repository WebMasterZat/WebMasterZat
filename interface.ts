// Inerface для определения формы объекта
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

// Объект user соответствует интерфейсу User
let user: User = {
    name: "Alice",
    age: 30,
    isAdmin: true
}