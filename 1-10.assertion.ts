function jsStrFunc(): any {
  return "hello";
}

const result = jsStrFunc();
console.log((result as string).length);
console.log((<string>result).length);

const exam: any = 5;
//console.log((exam as Array<string>).push(20); // Error!!

function findNum(): undefined {
  return undefined;
}

const numbers = findNum()!; // or numbers! 로 써도 가능
// numbers!.push(2); // Error!

const button = document.querySelector("class")!; // 반드시 있다고 확실할 때 사용
