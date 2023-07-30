{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  // 큰 틀
  // static: 클래스에서 공통적으로 가지고 있는 기능 또는 데이터를 미리 정의해둠
  // static은 클래스 자체에서만 호출 가능하다. 
  class CoffeeMaker {
    static BEANS_FRAMM_PER_SHOT: number = 7 // class level
    coffeeBeans: number = 0 // instance level

    // function CoffeeMaker(coffeeBeans){}랑 같은 의미.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    // coffeeMaker라는 class안에 있는 메소드 
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_FRAMM_PER_SHOT) {
        throw new Error('커피빈이 충분하지 않아요!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_FRAMM_PER_SHOT

      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32)
  const maker2 = CoffeeMaker.makeMachine(3)
  console.log(maker2)
}
