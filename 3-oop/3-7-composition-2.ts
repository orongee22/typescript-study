// 4-17, 4-18 강의

// 상속의 문제점 
//     ㄴ> 상속의 깊이가 깊어질수록 서로 간의 관계가 복잡해질 수 있음..!
//     ㄴ> 상속은 수직적이기 때문에 부모단에서 수정하면 자식단에 영향이 미침..!
//     ㄴ> 타입스크립트에선 한 가지 이상 부모 클래스를 상속할 수 없음
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

      constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) { 
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
		makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
		addSugar(cup: CoffeeCup): CoffeeCup;
  }

	// 싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log(`Steaming some milk🥛...`);
      return {
        ...cup,
        hasMilk: true,
      };
    }
		}

    	// 우유 거품기
	class FancyMilkSteamer implements MilkFrother {
			makeMilk(cup: CoffeeCup): CoffeeCup {
      console.log('Fancy Steaming some milk...🥛');
        return {
          ...cup,
          hasMilk: true,
        }
      }
		}

    	// 차가운 우유 거품기
	class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log('Fancy Steaming some milk...🥛');
    }
			makeMilk(cup: CoffeeCup): CoffeeCup {
        this.steamMilk();
        return {
          ...cup,
          hasMilk: true,
        }
      }
		}
	

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

	// 설탕제조기
	class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some suagr form jar🍯');
			return true;
    }
		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: true,
			}
		}
	}

  	// 설탕제조기
	class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some suagr form jar🍯');
			return true;
    }
		addSugar(cup: CoffeeCup): CoffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: true,
			}
		}
	}

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // class CaffeLatteMachine extends CoffeeMachine {
  //   constructor(beans: number, public readonly serialNumber: string, private milkFother: MilkFother) {
  //     super(beans)
  //   }
		
  //   makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots); 
  //       return this.milkFother.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
	// 	constructor(private beans: number, private sugar: SugarProvider) {
	// 		super(beans);
	// 	}
  //   makeCoffee(shots: number): CoffeeCup {
  //       const coffee = super.makeCoffee(shots);
  //       return this.sugar.addSugar(coffee);
  //   }
  // }

	// class SweetCaffeLatteMachine extends CoffeeMachine {
	// 	constructor(private beans: number, private milk: CheapMilkSteamer, private sugar: CandySugarMixer,) {
	// 		super(beans);
	// 	}
	// 	makeCoffee(shots: number) { // 부모에 있는 makeCoffee 함수 overwriting
	// 		const coffee = super.makeCoffee(shots);
	// 		const sugarAdded = this.sugar.addSugar(coffee)
	// 		return this.milk.makeMilk(sugarAdded);
	// 	}
	// }
  // ㄴ> 이름이 복잡한 여러 클래스들은 필요하지 않다!!
  // 각각의 기능 및 인터페이스, 커피머신이 필요하다..!!!

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // sugar
  const candySuger = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  const candySugar = new CandySugarMixer();
  // const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar)
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar)
  const sweetSugarMachine = new CoffeeMachine(12, noMilk, sugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}

// composition은 재사용성을 높여줌
// 현 코드에서 CaffeLatteMachine, SweetCoffeeMaker, SweetCaffeLatteMachine 클래스는 CheapMilkSteamer랑 CandySugarMixer랑 너무 친밀하게 엮여있다
//   => 위 3개의 클래스는 꼭 싸구려 우유 거품기와 설탕제조기를 꼭 써야해..
// 클래스와 클래스는 서로 모르고 지내는게 좋아!
// 그럼 어떻게 해야 커플링(엮여있는 상태)를 깰 수 있을까?


// 클래스들 간의 서로 상호작용을 하는 경우에는 클래스 자신을 노출하는 것이 아니라 계약서(= interface!!!)를 통해 의사소통을 해야한다.
// 클래스간 꽁꽁 커플링 된 아이들을 interface를 통해 디커플링한다..!!