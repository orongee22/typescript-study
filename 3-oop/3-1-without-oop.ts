// 반복적으로 개선해 나아갈 것이기 때문에 {} 로컬스코프를 이용해서 내부안에서만 쓰도록 작성
// 1. 절차지향적
{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7; // 명시적으로 하고 싶으면 타입을 적으면 되고, 생략도 가능
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error('Not enough coffee beans!')
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT
  const americano = makeCoffee(2)

  console.log(americano)
}