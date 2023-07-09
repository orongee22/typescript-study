{
  // 📌 Type Assertions
  function jsStrFunc(): any {
    return 'hello'
  }
  const result = jsStrFunc();
  console.log((result as string).length) // 5

  function jsNumFunc(): any {
    return 2
  }
  const result2 = jsNumFunc();
  console.log((result as string).length) // undefined

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)) // Error

  function findNumbers(): number[] | undefined {
    return undefined
  }

  // !(느낌표) : numbers는 무조건 undefined가 아니야! 라고 하는듯 
  const numbers = findNumbers()
  numbers!.push(2) // 
}