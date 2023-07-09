{
  // 📌 타입추론
  // type Inference
  // 타입스크립트가 알아서 타입을 명시해줌
  // ❗️ 왠만하면 타입을 명시해주는게 좋음! 간단한건 생략가능하나, 정확하게 타입 명시하는게 젤 죠음! 

  let text = 'hello';
  text = 'hi';
  // text = 1 >> Error!

  function print(message = 'hello') {
    console.log(message)
  }
  print('hello')

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add (1,2)

}