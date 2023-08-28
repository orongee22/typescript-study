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
  // 다형성을 통해서 한가지 클래스나 인터페이스를 통해서 다른 방식으로 구현한 클래스를 만들 수 있음!
  // 다형성의 장점 : 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스를 구현하거나 동일한 부모 클래스를 상속했을 때 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 api를 호출할 수 있는게 장점..!
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

// 다형성 : 하나의 인터페이스 또는 부모의 클래스를 상속한 자식클래스들이 인터페이스나 부모 클래스에 있는 함수들을 다른 방식으로 다양하게 구현함으로써 다형성을 만드는 것을 의미함.
