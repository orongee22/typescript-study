{
  type CoffeeCups = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * public : 외부에서 볼 수 있는 공개적
   * private : 외부에서 보이지 않음
   * protected : 외부에서는 접근할 수 없지만 상속한 자식 클래스에서만 접근이 가능
   */

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeCeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCups {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);

  // maker.coffeeBeans = 36;
  // maker.coffeeBeans = -24; // invalid 오브젝트 상태를 유효하지 않게 만듦
}
