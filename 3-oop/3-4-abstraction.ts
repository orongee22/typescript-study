{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  
  // interface이면 이름 앞에 I(prefix)를 붙이는 사람도 있음 (ex. ICoffeeMater)
  // 또는 interface는 그대로 두고, 클래스 이름 뒤에 Impl(Implement 구현)이라는 단어를 붙이는 사람도 있음.(ex. CoffeeMakerImpl)
  // interface는 밖에서 사용하는 이름이기 때문에 직관적인게 좋다..!

  // -- 구분을 위해 CoffeeMachine으로 이름 변경 --
  // class CoffeeMaker { 
  //   static BEANS_GRAM_PER_SHOT: number = 7; // class level
  //   coffeeBeans: number = 0; // instance (object) level

  //   constructor(coffeeBeans: number) {
  //     this.coffeeBeans = coffeeBeans; 
  //   }

  //   static makeMachine(coffeeBeans: number): CoffeeMaker {
  //     return new CoffeeMaker(coffeeBeans)
  //   }
  //   private grindBeans(shots: number) {
  //     console.log(`grinding beans for ${shots}`)
  //     if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
  //         throw new Error('Not enough coffee beans!')
  //       }
  //     this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
  //   }
  //   private preheat(): void {
  //     console.log('heating up...🔥')
  //   }
  //   private extract(shots: number): CoffeeCup {
  //     console.log(`Pulling ${shots} shots...☕`)
  //     return {
  //       shots,
  //       hasMilk: false,
  //     };
  //   }

  interface CoffeeMaker { 
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeMaker { 
    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; 
    }

    makerCoffee(shots: number): { shots: number; hasMilk: boolean; } {
      throw new Error("Method not implemented.");
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans)
    }
    
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0')
      } 
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...')
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
          throw new Error('Not enough coffee beans!')
        }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
    }
    private preheat(): void {
      console.log('heating up...🔥')
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...☕`)
      return {
        shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots); // 원두 갈기
      this.preheat(); // 기계 데우기
      return this.extract(shots); // 샷 추출하기
      // 추상화 :: interface를 간단하고 심플하게 만듦으로써 사용하는 사람이 간단하게 사용할 수 있도록 도와줌
      // 추상화 방식은?? => 접근제어자, encapsulation을 통해 추상화를 할 수도 있고, interface를 통해서도 할 수 있다.
      // 근데 interface가 없는 언어는 정보은닉을 통해서 추상화를 한다..!!
    }
  }

  // const maker: CoffeeMachine = new CoffeeMachine(70);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -3; // invalid
  // maker.makeCoffee(2);
  // maker.fillCoffeeBeans(3);
  // 사용자가 알 필요 없는 함수에는 private 접근 제어자를 붙여서 maker.했을 때 해당 함수들이 안뜨도록 하자 => 추상화!!
  // 추상화 해놓은 class들은 사용자(나 or 팀원)가 사용하기에 좋음..!


  const maker2: CoffeeMaker = new CoffeeMachine(70); // CoffeeMachine은 CoffeeMaker를 구현한 아이이기 때문에 둘은 동일하다 
  // maker2.fillCoffeeBeans(32) // => maker2의 타입 CoffeeMaker에는 makeCoffee함수 밖에 없기 때문에, fillCoffeeBeans메소드를 호출할 수 없다!!

  // const maker3: CommercialCoffeMaker  = new CoffeeMachine(70);
  // maker3.fillCoffeeBeans(32);
  // maker3.makerCoffee(2);
  // maker3.clean();

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee)
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(32);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker)
  const pro = new ProBarista(maker)
  amateur.makeCoffee();
  pro.makeCoffee();
}