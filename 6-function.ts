// Тип функции greet string
function greet(name: string): string {
  return "Hello, " + name;
}

// lastName? добавляется опционально
function buildName(firstName: string, lastName?: string): string {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}