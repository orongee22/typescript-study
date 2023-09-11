// either: a or b
interface Either<L, R> { // 사용할 때 L과 R의 타입이 정해짐
  left: () => L;
  right: () => R;
}

// 사용자가 같은 타입을 쓸수도 있고 다른 타입을 쓸 수 있어
// 제네릭은 길게 안쓰고 대문자 하나만 사용
class SimpleEitehr<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue
  }
  right(): R {
    return this.rightValue
  }
}

const either: Either<number, number> = new SimpleEitehr(4, 5)
either.left() // 4
either.right() // 5
const best = new SimpleEitehr(4, 'hello')
const best2 = new SimpleEitehr({name: 'ellie'}, 'hello') // object도 가능

// <I, V> I: item, V: value를 자주 나타냄