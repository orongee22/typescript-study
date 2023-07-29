// 절차지향적으로 커피기계 만들기
// 1. 커피콩 정의
// 2. makeCoffee 함수 정의, shot 을 인자로 받는다
// 3. 커피콩과 shot 인자를 통해 커피콩을 가공하여 커피를 return

{
	// let coffeeBean: number = 1000;

	// type CoffeeType = "mild" | "medium" | "dark";
	
	// function makeCoffee2(shot: number): string {
	//     const beUsingBean = 10;
	// 		let coffee: CoffeeType;

	// 		if (shot < 1) {
	// 			return "no shot!";
	// 		}

	// 		switch (shot) {
	// 			case 1:
	// 				coffee = "mild";
	// 				break;
	// 			case 2: 
	// 				coffee = "medium";
	// 				break;
	// 			default:
	// 				coffee = "dark";
	// 		}

	//     coffeeBean = coffeeBean - (shot * beUsingBean);
			
	//     return `1 ${coffee} coffee......`; 
	// }

	type CoffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	const BEANS_GRAMM_PER_SHOT: number = 7;

	let coffeeBeans: number = 0;
	function makeCoffee(shots: number): CoffeeCup {
		if (coffeeBeans< shots * BEANS_GRAMM_PER_SHOT) {
			throw new Error("Not enough coffee beans!");
		}
		coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
		return {
			shots: shots,
			hasMilk: false
		};
	}
    
	coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
	const coffee = makeCoffee(2);
	console.log(coffee);
}


