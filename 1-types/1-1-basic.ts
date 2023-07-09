{
  // javascript
  // let : 재할당 가능 , es6 도입
  let name = 'hello';
  name = 'hi'
  // const : 재할당 불가능
  const age = 5;
  // age = 9;
}

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

{
  //number
  const num:number = 2; // 소수, -값 할당 가능

  // string
  const srt:string = 'string'

  // undefined 💩 : 값이 결정되지 않은 상태
  let name: undefined; // 이렇게 담아버리면 undefined만 할당 가능

  let age: number | undefined; // 숫자 또는 언디파인드 가능 , optional타입일 때 사용

  // null : 값이 비었다 (결정)
  let person: null; // null 밖에 할당 못함.. 요것도 옵셔널 타입일 때 사용
  let person2: string | null; 

  // ** 보통 null보단 undifined많이 사용
}

{
  // unknown 💩 어떤 데이터가 담길지 알 수 없음 웬만하면 쓰지 않은게 좋음
let notSure: unknown = 0;
notSure = 'he'

  // any 💩
  let anything: any = 0;
  anything = 'hello';

  // void 함수에서 아무것도 리턴 안함 (생략가능)
  function print(): void {
    console.log('hello')
  }

  // never 이 함수를 호출 하면 나는 리턴할 생각이 절때 없어..!!!! 다른 것을 리턴할 수 없음..
function throwError(message: string): never {
  // throwError :: 어플리케이션에서 정말 예상치못한 핸들링할 수 없는 에러가 발생했을 때 호출할 수 있는 함수
  // message -> server(log) // 서버에 로그를 남김
  throw new Error(message)
  //while(true) 도 같은 경우
}
let nverEnding: never; //💩

// objet 객체는 다 들어갈 수 있음, 원시타입을 제외한 모든 오브젝트 타입 할당 가능 (배열도 가능함함)💩
let obj: object;
function acceptSomeObject(obj: object) {
  // asseptSomeObject
}
}