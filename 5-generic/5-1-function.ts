{
  function checkNotNullBad(arg: number | null): number {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  // 다른 타입들도 체크하고 싶은데 그럼 타입마다 checkNotNull같은 걸 만들어야할까?
  // 아니야!!
  // 그럼 any를 써보자
  function checkNotNullAnyBad(arg: any | null):any {
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  } // 근데 이러면 타입을 보장할 수 없어😱

  const result = checkNotNullAnyBad(123); // 이러면 숫자를 넣으면 any가 리턴되기 때문에 아래의 result는 any가 됨 => 타입이 안전하지가 않아
  console.log(result);
  
  // 제네릭을 이용하면 어떤 타입이든지 받을 수 있음! 그리고 제네릭을 사용 할 때 타입이 결정 됨 => 타입 보장 받을 수 있음
  // function checkNotNull<GENERIC>(arg: GENERIC | null):GENERIC { // <> 제네릭 : 통상적인, 일반적인, 포용하는
    function checkNotNull<T>(arg: T | null): T { // 보통은 길게 안쓰고 T라고 간략하게 첫글자를 대문자로 사용
    if(arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  const number = checkNotNull(123) // number는 숫자타입으로 결정
  const boal: boolean = checkNotNull(true) // boal => boolean
  // const boal2: string = checkNotNull(true) // boolean 타입을 string에 할당 할 수 없어서 에러남
  // 제네릭을 사용하면 사용하는 사람이 어떤 타입인지 결정할 수 있음
}