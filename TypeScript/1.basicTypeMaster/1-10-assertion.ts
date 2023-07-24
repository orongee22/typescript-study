{
  /**
   * Type Assertions : 타입이 정해지지 않았지만(any) 명확할 때 사용
   */

  function jsStrFunc(): any {
    return 'hello';
    // return 2; : 웹이 죽진 않지만 undefined 리턴
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  // or
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 웹이 죽는 경우 에러 발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers(); // const numbers = findNumbers()!;
  numbers!.push(2); //numbers가 Array 라고 확신 할 때 ! 사용
}
