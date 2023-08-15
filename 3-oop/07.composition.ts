{
  type CoffeeCup = {
    shots: number
    hasMilk?: boolean
    hasSugar?: boolean
  }

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  // interface를 구현할 때는 Implements를 사용해야하고
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_FRAMM_PER_SHOT: number = 7 // class level
    private coffeeBeans: number = 0 // instance level

    public constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('0보다 커야합니다.')
      }
      this.coffeeBeans += beans
    }

    clean() {
      console.log('cleaning the machine...!')
    }

    private grindBeans(shots: number) {
      console.log('grinding beans for: ', shots)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_FRAMM_PER_SHOT) {
        throw new Error('커피빈이 충분하지 않아요!')
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_FRAMM_PER_SHOT
    }

    private preheat(): void {
      console.log('heating up...')
    }

    private extract(shots: number): CoffeeCup {
      console.log('pulling: ', shots)
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots)
      this.preheat()
      return this.extract(shots)
    }
  }

  // class를 상속할때는 extends를 사용해야한다.
  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans)
    }
    private steamMilk(): void {
      console.log('steaming some milk...')
    }
    makeCoffee(shots: number): CoffeeCup {
      // 부모에서 사용하고 있는 함수 사용하고 싶을 때 사용하는 키워드 super
      const coffee = super.makeCoffee(shots)
      this.steamMilk()
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeemaker extends CoffeeMachine{
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots)
      return {
        ...coffee,
        hasSugar: true,
      }
    }
  }
  const machines: CoffeeMaker[]  = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeemaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeemaker(16),
  ]
  machines.forEach(machine => {
    console.log('-------------------')
    machine.makeCoffee(1)
  })
}
