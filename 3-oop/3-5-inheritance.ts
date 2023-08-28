{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // interface => implements 키워드 사용
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    // protected constructor(coffeeBeans: number) { // protected: 자식 클래스에선 접근 가능
      constructor(coffeeBeans: number) { // 또는 전체적으로 public 가능
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

  // 상속 => extends 키워드 사용
  // 라떼머신를 추가해보자
  // 자식 클래스에서 부모 클래스의 함수를 덮어씌울 수 있음 : overwriting
  class CaffeLatteMachine extends CoffeeMachine {
    // 자식클래스에서 생성자를 호출하려면 꼭 super(=> 부모의 생성자)를 호출해야함
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans) // 생성자는 따로 된 함수가 아니기 때문에 그냥 super호출하면 됨
    }
    private steamMilk(): void {
      console.log('Steaming some milk...🥛');
    }
    makeCoffee(shots: number): CoffeeCup {
        const coffee = super.makeCoffee(shots); // super라는 키워드를 통해서 부모 클래스의 함수를 호출할 수 있음.
        this.steamMilk();
        return {
          ...coffee,
          hasMilk: true,
        }
    }
    // 상속을 잘 활용하면 공통적인 기능은 그대로 재사용하면서 자식 클래스에서만 특화된 기능을 추가할 수도 있음
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'SSSS');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee)
}
