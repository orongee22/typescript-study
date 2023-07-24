/**
 * Type Inference : 타입 추론
 */
{
  let text = 'hello';
  // text = 1 : text라는 변수는 string을 할달했기 때문에 string 타입이라고 추론

  // 함수에 타입을 지정하지 않으면 타입스크립트가 자동으로 추론함(아무것도 입력하지 않으면 any 타입)
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2); //add라는 함수는 숫자를 리턴하기 때문에 result라는 변수는 number타입으로 자동으로 추론됨
}
