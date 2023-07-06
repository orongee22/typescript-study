// Array
const names: string[] = "Yerina".split("");
const scroes: number[] = [1, 3, 4];

function printArray(names: readonly string[]) {
  //   names.push("s"); // 오류!
  console.log(names);
}

// Tuple : 배열의 특정 인덱스의 타입까지 정의하는 것
let student: [string, number];
student = ["name", 123];
student[0]; // name
student[1]; // 123

// Tuple을 사용할 때는 interface, type alias, class로 대체해서 사용하는 것이 좋다.
interface Student {
  name: string;
  age: number;
}
