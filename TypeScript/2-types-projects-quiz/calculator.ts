/**
 * Let's make a calculator 🧮
 */

type Operations = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(operations: Operations, x: number, y: number): number {
  switch (operations) {
    case 'add':
      return x + y;
    case 'substract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      return x / y;
    case 'remainder':
      return x % y;
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1


// 왜 console을 찾을 수 없는거죠??? 내가 뭐 잘못한건가요????제발 알려주세요. 
// 해결법 : npm install --dev @types/node 설치하니까 잘됨...죽일까...
// 놓친 부분 : switch문에서 default를 사용하지 않았음...문법은 잘 지킵시다.