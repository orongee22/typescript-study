{
    

    // const BEANS_GRAMM_PER_SHOT: number = 7;
 
    // class CoffeeMachine {
    //     public coffeeBeans: number = 0;

    //     makeCoffee(shots: number): CoffeeCup {
    //         if (this.coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
    //             throw new Error("Not enough coffee beans");
    //         }

    //         this.coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
            
    //         const coffeeCup = new CoffeeCup(shots, false);
    //         return coffeeCup; 
    //     }

    //     addCoffeeBeans(account: number) {
    //         this.coffeeBeans = account;
    //     }
        
    // }

    // class CoffeeCup {
    //     public shots: number;
    //     public hasMilk: boolean;

    //     constructor(shots: number, hasMilk: boolean) {
    //         this.shots = shots;
    //         this.hasMilk = hasMilk;
    //     }
    // }


    // const coffeeMachine = new CoffeeMachine();
    // coffeeMachine.addCoffeeBeans(40);
    // console.log(coffeeMachine.makeCoffee(2));

	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}
	class CoffeeMaker {
		// BEANS_GRAMM_PER_SHOT: number = 7; // 멤버 변수
		static BEANS_GRAMM_PER_SHOT: number = 7;
		coffeeBeans: number = 0;

		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans: number): CoffeeMaker {
			return new CoffeeMaker(coffeeBeans);
		}

		makeCoffee(shots: number): CoffeeCup {
			if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
				throw new Error("Not enough coffee beans");
			}

			this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
			return {
				shots, 
				hasMilk: false
			}
				
		}
	}
 
	const maker = new CoffeeMaker(10);
	console.log(maker);
	const maker2 = CoffeeMaker.makeMachine(10);
	console.log(maker2);
}