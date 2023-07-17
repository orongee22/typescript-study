/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


function calculate(type: string, num1: number, num2: number): number | string {
  let res: number | string
  switch(type) {
    case 'add':
      res = num1 + num2
      break
    case 'substract':
      res = num1 - num2
      break
    case 'multiply':
      res = num1 * num2
      break
    case 'divide':
      res = num1 / num2
      break
    case 'remainder':
      res = num1 % num2
      break
    default:
      res = '계산을 할 수 없습니다'
  }
  return res
}

// -- 엘리's Answer --

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'

function calculate2(command:Command, a:number, b:number): number {
  switch(command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b
    case 'multiply':
      return a * b
    case 'divide':
      return a / b
    case 'remainder':
      return a % b
    default:
      throw Error('unknown command');
  }
}