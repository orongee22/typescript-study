{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    // return 'hello';
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  // 분명히 함수에서 문자열을 리턴해줄걸 난 알아!!! 그래서 지금 현재 result는 any타입이지만 미리 스트링이라고 말해주는거야(캐스팅하는거야)
  // 하지만 number를 보내주면..? 
  console.log((result as string).length); // number가 와도 undefined이라고 떠, 잘못된거야 ㅇㅅㅇ..
  console.log((<string>result).length);  // number가 오면 에러나 😱

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱
  // ! : 100% 상황일 때 !쓸 수 있어..!!
  // numbers!.push(2) // !가 있으면 무조건 숫자배열만 받을거야 undifined라는걸 난 알아!!!!일 때만 사용..
  // const numbers = findNumbers()!; // 이렇게 뒤에다가 !붙여도 같아아

  const button = document.querySelector('class')!;
}
