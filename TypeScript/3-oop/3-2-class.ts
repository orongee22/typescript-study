import { log } from 'console';

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
    private coffee: string = '';

    constructor(coffeBeans: number) {
      this.coffeeBeans = coffeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number, hasMilk: boolean): string {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      this.coffee = hasMilk
        ? `${shots} 샷이 들어간 달콤한 라떼입니다.`
        : `${shots} 샷이 들어간 아메리카노 입니다.`;
      return this.coffee;
    }
  }

  const maker = new CoffeeMaker(100);

  const maker1 = CoffeeMaker.makeMachine(1000);
  console.log(maker1.makeCoffee(2, true));
  console.log(maker1);
}
