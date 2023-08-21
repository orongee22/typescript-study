{
	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(bean: number): void;
        clean(): void;
    }
	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker { // 인터페이스는 여러 개 상속받을 수 있음
		// BEANS_GRAMM_PER_SHOT: number = 7; // 멤버 변수
		private static BEANS_GRAMM_PER_SHOT: number = 7;
		private coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMachine {
			return new CoffeeMachine(coffeeBeans);
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
            return this.extract(shots);
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
 
	const maker: CoffeeMachine = new CoffeeMachine(10);
    maker.fillCoffeeBeans(100);
    maker.makeCoffee(10);

    const maker2: CommercialCoffeeMaker = new CoffeeMachine(10);
    maker2.fillCoffeeBeans(100);
    maker2.makeCoffee(10);
    maker2.clean();

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2)
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    const maker3: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker3);
    const pro = new ProBarista(maker3);
    amateur.makeCoffee();
    pro.makeCoffee();
}