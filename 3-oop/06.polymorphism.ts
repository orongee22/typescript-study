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

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans
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
      const coffee = this.extract(shots)
      const sugarAdded = this.sugar.addSugar(coffee)
      return this.milk.makeMilk(sugarAdded)
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('steaming some milk...')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy steaming some milk...')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy steaming some milk...')
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk()
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  // 설탕제조기
  class CandySugarMixer implements SugarProvider {
    private getSuger() {
      console.log('getting some sugar from candy')
      return true
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger()
      return {
        ...cup,
        hasSugar: true,
      }
    }
  }
  class SugarMixer implements SugarProvider {
    private getSuger() {
      console.log('getting some sugar from jar')
      return true
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSuger()
      return {
        ...cup,
        hasSugar: true,
      }
    }
  }
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup
    }
  }

  const machines: CoffeeMaker[] = [
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

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer()
  const fancyMilkMaker = new FancyMilkSteamer()
  const coldMilkMaker = new ColdMilkSteamer()
  const noMilk = new NoMilk()

  // sugar
  const candySugar = new CandySugarMixer()
  const sugar = new SugarMixer()
  const noSugar = new NoSugar()

  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar)
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar)

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar)
  const fancyLatteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar)
  const coldMachine = new CoffeeMachine(12, coldMilkMaker, noSugar)

  const sweetLatteeMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar)
}
