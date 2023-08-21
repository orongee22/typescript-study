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


    class CaffeLatteMachine extends CoffeeMachine {
        private steamMilk(): void {
            console.log('steaming some milk.........')
        }
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            
            const coffee = super.makeCoffee(shots); // super를 통해 부모 클래스 내 함수 호출 가능
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }

	const sweetMachine = new SweetCoffeeMaker(100);
    const sweetCoffee = sweetMachine.makeCoffee(10);
    console.log(sweetCoffee);

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(200),
        new CaffeLatteMachine(200, '000001'),
        new SweetCoffeeMaker(2000)
    ];

    machines.forEach(machine => {
        console.log("---------------")
        machine.makeCoffee(1);
    })
}