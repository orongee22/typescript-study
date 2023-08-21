{
	type CoffeeCup = {
		shots: number;
		hasMilk?: boolean;
        hasSugar?: boolean;
	}

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }


	abstract class CoffeeMachine implements CoffeeMaker { // 추상 클래스는 인터페이스 생성 불가
		// BEANS_GRAMM_PER_SHOT: number = 7; // 멤버 변수
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
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

        protected abstract extract(shots: number): CoffeeCup;
        
		makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
		}

		addCoffeeBeans(amount: number) {
			if(amount < 0) {
				throw new Error("커피콩을 넣어주세여")
			}
			this.coffeeBeans = amount;
		}
	}


    class CaffeLatteMachine extends CoffeeMachine {
        private steamMilk(): void {
            console.log('steaming some milk.........')
        }
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots, 
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots, 
                hasMilk: false
            }
        }
    }

	const sweetMachine = new SweetCoffeeMaker(100);
    const sweetCoffee = sweetMachine.makeCoffee(10);

    const caffeLatteMachine = new CaffeLatteMachine(100, '00001');
    const caffeLatteCoffee = caffeLatteMachine.makeCoffee(10);
    console.log(sweetCoffee);
    console.log(caffeLatteCoffee);

    
}