{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
        hasSugar?: boolean;
	}

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }


	class CoffeeMachine implements CoffeeMaker { // 인터페이스는 여러 개 상속받을 수 있음
		// BEANS_GRAMM_PER_SHOT: number = 7; // 멤버 변수
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number, private milk: MilkFrother, private sugar: SugarProvider) {
			this.coffeeBeans = coffeeBeans;
		}

        fillCoffeeBeans(beans: number) {
            if(beans< 0) {
                throw new Error("value for beans should be greater than 0");
            }

            this.coffeeBeans = beans;
        }

        clean() {
            console.log("cleaning the machine");
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans<shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("not enough coffee beans!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number):CoffeeCup {
            console.log(`pulling ${shots}`)
            return {
				shots, 
				hasMilk: false
			}
        }
		makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
			// if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
			// 	throw new Error("Not enough coffee beans");
			// }

			// this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
			// return {
			// 	shots, 
			// 	hasMilk: false
			// }
				
		}

		addCoffeeBeans(amount: number) {
			if(amount < 0) {
				throw new Error("커피콩을 넣어주세여")
			}
			this.coffeeBeans = amount;
		}
	}


    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }


    // class CaffeLatteMachine extends CoffeeMachine {
    //     constructor(beans: number, public readonly serialNumber: string, private milkFother: MilkFrother) { // <-- dependency injection
    //         super(beans);
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots); // super를 통해 부모 클래스 내 함수 호출 가능
    //         return this.milkFother.makeMilk(coffee);
    //     }
    // }

    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('steaming some milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Fancy steaming some milk.....');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Cold steaming some milk.....');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    // 설탕제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getting some sugar from candy');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }

    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getting some sugar from candy');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }
    // class SweetCoffeeMaker extends CoffeeMachine {
    //    constructor(private beans: number, private sugar: SugarProvider) {
    //     super(beans);
    //    };
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         return this.sugar.addSugar(coffee);
    //     }
    // }

    // class SweetCaffeLatteMachine extends CoffeeMachine {
    //     constructor(private beans: number, private milkFother: MilkFrother, private sugar: SugarProvider) {
    //         super(beans);
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         return this.milkFother.makeMilk(this.sugar.addSugar(coffee));
    //     }
    // }

    // 아래와 같을 경우 재사용성 떨어짐
    // sugar와 milkfother 를 만드는 Interface 가 필요함
    // const cheapMilkMaker = new CheapMilkSteamer();
    // const candySugar = new CandySugarMixer();
    // const sweetMachine = new SweetCoffeeMaker(12, candySugar);
    // const latteMachine = new CaffeLatteMachine(12, '00001', cheapMilkMaker);
    // const sweetLatteMachine = new SweetCaffeLatteMachine(12, cheapMilkMaker, candySugar);

    // milk
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    // machine
    const sweetCandyMachine = new CoffeeMachine(100, noMilk, sugar);
    const sweetLatteMachine = new CoffeeMachine(200, fancyMilkMaker, candySugar);
    const coldLatteMachine = new CoffeeMachine(170, coldMilkMaker, noSugar);
}