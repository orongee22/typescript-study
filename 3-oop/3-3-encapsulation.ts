{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  
  class CoffeeMaker { 
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; 
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(70);
  maker.coffeeBeans = 3;
  maker.coffeeBeans = -3; // invalid

  // 위처럼 코드를 짜면 외부에서 나의 오브젝트 상태를 수정할 수 있음. => encalsulation을 이용하자
}

// 그래서 멤버변수를 private이나 protected등으로 설정할거야!

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  
  // public, private, protected 사용가능.
  // public이 default
  // protected :: 상속을 할 때 외부에선 접근할 수 없지만 클래스를 상속한 자식 클래스에선 접근 가능함..!!
  class CoffeeMaker { 
    private BEANS_GRAM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0; // 이제 커피를 붓는 행위를 통해 변경시키자.

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; 
    }

    // staitc을 통해 오브젝트를 만들 수 있는 함수를 제공한다면 이말은 누군가가 생성자를 이용해 생성하는 것을 금지하기 위해 씀..! => 이 경우엔 contructor를 private으로 만들어 항상 static 메소드를 이용할 수 있도록 만드는 것이 좋다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0')
      } 
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * this.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!')
      }
      this.coffeeBeans -= shots * this.BEANS_GRAM_PER_SHOT
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  // const maker = new CoffeeMaker(70); // 얘는 이제 안됨
  const maker = CoffeeMaker.makeMachine(70); // 얘는 이제 안됨
  maker.fillCoffeeBeans(32);
}

// encapsulation :: 클래스를 만들 때 외부에서 접근할 수 있는것은 무엇인지 내부적으로만 가지고 있어야 하는 것은 무엇인지 잘 생각해서 디자인해야함..!!