interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!')
  }
  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!!')
  }
  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

// 제대로 된 제네릭 함수
// function pay<T>(employee: T): T {
  // employee.pay => employee에 pay라는 함수가 없네!?
  // 제네릭은 너무 너무 일반적인 타입이기 때문에(어느것이든 들어올 수 있음) 그래서 현재는 타입에 대한 정보가 없기 때문에 사용할 수가 없음..!
function pay<T extends Employee>(employee: T): T { // Employee를 구현한 확장 변수만 가능해..!!
  // 제네릭도 조건을 걸어서 좀더 제한적인 범위에서 사용가능함.!
  employee.pay()
  return employee;
}

const ellie = new FullTimeEmployee()
const bob = new PartTimeEmployee()
ellie.workFullTime()
bob.workPartTime()

const ellieAfterPay = pay(ellie) // eillieAfterPay가 풀타임인지 파트타임인지 정보를 잃어버리고 리턴됨 (Employee가 리턴되기 때문)
const bobAfterPay = pay(bob)


// ----------------------|| 6-5 ||-----------------------
const obj = {
  name: 'ellie',
  age: 20,
}
const obj2 = {
  animal: '🐶'
}

// function getValue(obj: T, key: K)
// obj는 어떠한 타입일 수도 있고, key도 어떠한 타입일 수도 있음..!
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  // T 라는 어떠한 오브젝트를 받을 수 있음
  // K: Obj(T)의 key값중 하나여야 함
  // 리턴 값은 Obj에 있는 key의 리턴값이여야 한다
  return obj[key]
}

console.log(getValue(obj, 'name')); // ellie
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐶
// console.log(getValue(obj2, 'human')); // key 값에 human이 없어서 에러남