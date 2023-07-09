{
    /**
   * Type Inference
   */
  let text = 'hello'; // 타입이 뻔한 경우 생략도 가능함
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);


  // 타입추론은 좋은게 아닌거같애...
  // 코드가 간단하게 작성되는 경우는 잘 없기 때문에 웬만하면 명확히 타입을 명시해주는게 좋아
  // 원시타입은 생략가능하지만.. 함수는 특히 명시해주는게 좋아!
}
