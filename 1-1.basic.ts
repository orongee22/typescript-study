// unknown 알 수 없는 타입
let notSure: unknown = 0;
notSure = "hello";
notSure = true;

// void: 반환 값이 없는 함수 타입
function print(): void {
  console.log("hello");
}

// never: 절대 반환하지 않는 함수 타입
// 주로 에러처리 or 무한루프 의 경우 사용
function throwError(msg: string): never {
  throw new Error(msg);

  // or
  while (true) {}
}
