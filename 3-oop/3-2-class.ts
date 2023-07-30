// 1. 객체지향이기 때문에 Object를 이용해서 커피기계 만들기
// 2. 커피 머신이라는 클래스 구현하기
// 3. 커피머신 내에는 커피빈즈와 메이크커피 함수가 필요
// 4. 커피머신이라는 클래스를 이용해 인스턴스 커피머신이라는 객체를 만들어보자!

{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 클래스 안에는 커피 메이커와 관련된 함수와 속성들이 다 들어가면 됨
  // 클래스안에서 멤버변수들은 const와 let을 사용하지 않음.
  // 함수도 function 키워드 사용 안해도 됨.
  
  class CoffeeMaker { // CoffeeMaker에는 두가지의 속성과 constructor 1개, 함수도 1개가 있음.
    // BEANS_GRAM_PER_SHOT: number = 7; // 명시적으로 하고 싶으면 타입을 적으면 되고, 생략도 가능
    // ㄴ> 변하지 않는 숫자
    // 클래스에서 한 번 정의 되어 지고 모든 오브젝트에서 공유가 되는 값을 멤버변수로 선언해두면 클래스를 만들 때마다 중복적으로 선언되어, 메모리의 낭비가 이루어짐
    // 이런 애들은 static이라는 키워드를 붙이게 되면 클래스 레벨이 됨
    // 안붙이면 instance (object) level이 됨.
    // BEANS_GRAM_PER_SHOT은 이제 클래스 레벨이기 때문에 this를 사용하지 않고, 클래스 이름을 지정해줘야한다.
    // coffeeBeans: number = 0;

    static BEANS_GRAM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    // constructor :: class를 가지고 오브젝트, 인스턴스를 만들 때 항상 처음에 호출되는 함수.
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans; // 원하는 만큼의 커피콩 수를 전달 할 수 있음.
    }

    // static을 사용한 함수 (constructor를 호출하지 않고 새로운 커피기계를 만들고 싶어. )
    // 이 함수는 class내 변수를 어느것도 사용하지 않기 때문에 static을 사용할 수 있음.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffee(shots: number): CoffeeCup {
      // class안에 있는 멤버변수를 접근할 때에는 this를 붙여야함
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

  const maker = new CoffeeMaker(70); // new :: 클래스의 instance생성, () :: 생성자 호출
  const maker2 = new CoffeeMaker(35);
  console.log(maker, maker2)

  // static을 붙이면 CoffeeMaker { coffeeBeans: 70 } CoffeeMaker { coffeeBeans: 35 }이렇게 나오고
  // BEANS_GRAM_PER_SHOT에 static을 안붙이면 CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 70 } CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 35 }
  // 이렇게 나와서 메모리 낭비가 된다.

  // 클래스 :: 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될 것이라는 것을 정의함.
  // 정의된 클래스에 실제로 데이터를 넣어 오브젝트를 만들 수 있음!
  // 클래스 레벨에서 한 번에 공유되는거면 static을 이용하자
  // static은 멤버변수 뿐만아니라 함수에서도 이용가능함.

  const maker3 = CoffeeMaker.makeMachine(7)
  console.log('maker3', maker3)
  // class레벨에서 사용하고 싶으면 static을 사용하자

  // static을 사용하는 예제 : js의 Math
}

// 깔끔 버전
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
  const maker2 = new CoffeeMaker(35);
  console.log(maker, maker2)

  const maker3 = CoffeeMaker.makeMachine(7)
  console.log('maker3', maker3)
}