{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }


  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  } 

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillCoffeeBeans(beans: number):void
    clean():void
  } 

  // CoffeeMachine이라는 클래스는 CoffeeMaker을 구현하는 아이다! 라는 의미.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_FRAMM_PER_SHOT: number = 7 // class level
    private coffeeBeans: number = 0 // instance level

    constructor(coffeeBeans: number) {
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
      console.log('cleaning the machine...!');
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
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots)
    }
  }

  class AmateurUser {
    constructor(private machine: CoffeeMaker){}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee);
      
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker){}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32)
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);


}
