{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  // public: 디폴트값
  // private: 외부에서 접근할 수 없다.
  // protected: 상속된 자식만 접근할 수 있다. 
  class CoffeeMaker {
    private static BEANS_FRAMM_PER_SHOT: number = 7 // class level
    private coffeeBeans: number = 0 // instance level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans)
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('0보다 커야합니다.')
      }
      this.coffeeBeans += beans
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_FRAMM_PER_SHOT) {
        throw new Error('커피빈이 충분하지 않아요!')
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_FRAMM_PER_SHOT

      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(32)
  maker.fillCoffeeBeans(3)

  class User {
    // 일반 변수처럼 접근이 가능하지만 ( = user.fullName )
    // 어떠한 계산을 해야할 때 유용하게 사용할 수 있다. 
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
    get age(): number | undefined{
      return this.internalAge;
    }
    // 값을 변경하고자 할 때 사용하는 거 같음 
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string, private internalAge?: number) {
    }
  }

  const user = new User('Steve', 'Jobs')
  user.age = 6;
  console.log(user.fullName)
  console.log(user.age)

}
