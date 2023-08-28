// 상속의 문제점 
//     ㄴ> 상속의 깊이가 깊어질수록 서로 간의 관계가 복잡해질 수 있음..!
//     ㄴ> 상속은 수직적이기 때문에 부모단에서 수정하면 자식단에 영향이 미침..!
//     ㄴ> 타입스크립트에선 한 가지 이상 부모 클래스를 상속할 수 없음
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean; // optional
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

      constructor(coffeeBeans: number) { 
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the machine...🧼');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up... 🔥');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots... ☕️`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans)
    }
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots); 
        this.steamMilk();
        return {
          ...coffee,
          hasMilk: true,
        }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private addSugar(): void {
      console.log('add Sugar..')
    }
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots);
        this.addSugar();
        return {
          ...coffee,
          hasSugar: true
        }
    }
  }
  const machines: CoffeeMaker[] = [
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'A'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'B'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  })
}

