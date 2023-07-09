{
  // function add(num1:number, num2:number):number {
  //   return num1 + num2;
  // }


  // function fetchNum(id: string): Promise<number> {
  //   return new Promise((resolve, reject) => {
  //     resolve(100)
  //   })
  // }

  // 📌 Optional parameter
  // 물음표 넣어주면 됩니드아~ 
  function printName(firstName: string, lastName?: string) {
    console.log(firstName)
    console.log(lastName)
  }
  printName('Ellie')

  // Default parameter
  function printMeaasge(message: string = 'default') {
    console.log(message)
  }
  printMeaasge();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a,b) => a + b)
  }
  console.log(addNumbers(1,2))
}