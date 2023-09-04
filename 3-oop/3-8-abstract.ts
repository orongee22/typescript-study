// 3-6 polymorphism 코드에서 시작

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean; // optional
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // abstract 키워드를 붙이면 커피머신 자체로는 오브젝트를 만들 수 없음..!!!
  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

      constructor(coffeeBeans: number) { 
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }  그래서 여기 에러남..

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

    // 자식클래스마다 달리질 수 있는 행동이 있다면 그행동앞에 abstract라는 키워드를 붙일 수 있음..!
    // 자식마다 다르게 되기 때문에 protected 접근제어자를 써야함
    // abstract 앞에 protected 선언
    // 너무너무 추상적이기 때문에 구현사항은 작성하면 안됨..!
    protected abstract extract(shots: number): CoffeeCup;

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

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
           return {
          shots,
          hasMilk: true,
        }
    }

    // makeCoffee(shots: number): CoffeeCup {
    //     const coffee = super.makeCoffee(shots); 
    //     // ㄴ>여기서 super의 makeCoffee를 불러오지 않으면 grindBeans, preheat와 같은 절차를 빼먹을 수도 있음..
    //     // 그래서 안전하게 만들기 위해 abstract 클래스를 만들 수 있다.
    //     this.steamMilk();
    //     return {
    //       ...coffee,
    //       hasMilk: true,
    //     }
    // }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasMilk: true,
      }
    }

    // private addSugar(): void {
    //   console.log('add Sugar..')
    // }
    // makeCoffee(shots: number): CoffeeCup {
    //     const coffee = super.makeCoffee(shots);
    //     this.addSugar();
    //     return {
    //       ...coffee,
    //       hasSugar: true
    //     }
    // }
  }
  const machines: CoffeeMaker[] = [
    // new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'A'),
    new SweetCoffeeMaker(16),
    // new CoffeeMachine(16),
    new CaffeLatteMachine(16, 'B'),
    new SweetCoffeeMaker(16),
  ];
  machines.forEach((machine) => {
    console.log('-------------------------');
    machine.makeCoffee(1);
  })
}

// 상속클래스를 이용할때 무언가 반복되는 절차적인.. 어떤 특정 기능만 자식클래스에서 달라진다면 abstract클래스를 만들 수 있음..
// 너무 깊은 상속(수직적인 상속)보단 composition이 더 좋을 수도 있다!