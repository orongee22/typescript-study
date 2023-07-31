{
    const BEANS_GRAMM_PER_SHOT: number = 7;
 
    class CoffeeMachine {
        public coffeeBeans: number = 0;

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
                throw new Error("Not enough coffee beans");
            }

            this.coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
            
            const coffeeCup = new CoffeeCup(shots, false);
            return coffeeCup; 
        }

        addCoffeeBeans(account: number) {
            this.coffeeBeans = account;
        }
        
    }

    class CoffeeCup {
        public shots: number;
        public hasMilk: boolean;

        constructor(shots: number, hasMilk: boolean) {
            this.shots = shots;
            this.hasMilk = hasMilk;
        }
    }


    const coffeeMachine = new CoffeeMachine();
    coffeeMachine.addCoffeeBeans(40);
    console.log(coffeeMachine.makeCoffee(2));
}