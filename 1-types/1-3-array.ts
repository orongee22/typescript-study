{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {} // fruits는 이제 절대 변경할 수 없어!!
  // readonly는 자주 사용해

  // Tuple -> interface, type alias, class 세가지로 대체해서 사용하면 조아요 ::: 서로 다른 타입을 가질 수 있는 배열
  let student: [string, number];
  student = ['name', 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;

  // 엘리는 튜플 사용을 권장하지 않음.🥲
  // 튜플 대신 오브젝트, 클래스 형태로 
  // 오브젝트나 클래스가 잇으면
  // student.name || student.age로 쓸 수 있는데 굳이 튜플 형식이 필요한가..?
  // 튜플을 잘 사용한 예 ::: react에선 useState는 리턴타입으로 튜플을 사용하고 있음. (A,setA)일 경우 앞이랑 뒤가 다르니깐..
}
