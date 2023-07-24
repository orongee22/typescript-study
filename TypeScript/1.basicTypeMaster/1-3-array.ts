{
  // Array
  const fruits: string[] = ['사과', '포도'];
  const scroes: Array<number> = [1, 2, 3];

  /**
   string[], Array<number> 차이점
   * readonly를 사용할 때에는 string[]을 사용해야 한다.
   * function printArray(fruits: readonly string[]) {}
  */

  function printArray(fruits: readonly string[]) {
    console.log(fruits);
  }
  function printArrayA(scroes: Array<number>) {
    console.log(scroes);
  }

  printArray(fruits);
  printArrayA(scroes);

  // Tuple -> interface, type alias, class로 대체해서 사용하는 것이 좋다
  let student: [string, number];
  student = ['name', 37];
  student[0]; // name
  student[1]; // 37

  const [name, age] = student;

  console.log(name);
  console.log(age);
}
