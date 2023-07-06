// Optional Parameter
function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName("Steve", "Jobs");
printName("Yerina");

// Default Parameter
function printMessage(message: string = "default message") {
  console.log(message);
}

printMessage();

// Rest Parameter
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
