{
  type CoffeeCups = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 클래스에서 정해진 변수, 즉 변하지 않는 데이터, 멤버변수로 작성하게 되면 클래스를 이용해 작성할 때 마다 같은 데이터가 포함되어 있다.
   * 클래스가 한 번 정의되어지고 클래스를 이용한 오브젝트 사이에서 공유가 될 수 있는 데이터들은 오브젝트를 만들 때마다 중복적으로 생성되기 때문에 메모리 낭비가 될 수 있다
   * static이라는 키워드를 이용해 class level로 지정 (this가 아니라 클래스 이름을 지정, 멤버변수 뿐만 아니라 함수에서도 동일하게 적용)
   */

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 7; // class level : 클래스와 연결이 되어있기 때문에 오브젝트마다 만들어지거나 생성되지 않음
    coffeeBeans: number = 0; // instance(object) level :

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const coffee = maker.makeCoffee(2);
  console.log('coffee: ', coffee);

  const maker1 = CoffeeMaker.makeMachine(3);
  console.log(maker1);
}
