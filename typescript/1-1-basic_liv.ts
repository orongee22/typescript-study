// 📌 undefined - 있는지 없는지 몰라! 
// 값으로 들어가기보다 타입으로 들어간다. 
let age: number | undefined
function find(): number | undefined {
  return undefined
}

// 📌 null: 값보다 타입으로 들어간다. 
let person: string | null

// 📌 unknown : 알 수 없음
// 어떤 타입이라도 넣을 수 있음 
// 가능하면 쓰지 않는것이 좋음! 
// 자바스크립트에서 리턴하는 타입을 모를떄 쓰는게 좋은데 그래도 쓰지마..  
// 컴파일러가 체크하는 타입이라, 문제되는 코드를 미리 예방할 수 있음 
// https://developer-talk.tistory.com/198
let notSure: unknown

// 📌 any
// 어떤 것이든 넣을 수 있는 타입! 
// 타입검사가 느슨하다보니 예기치 못한 문제가 발생할 수 있음. 
// https://developer-talk.tistory.com/198
let anything: any

// 📌 void
// 아무것도 리턴하지 않으면 void! 
function print(): void {
  console.log('hello');

// 📌 never
// 절대 리턴하지 않을떄! 
// 함수가 끝나지 않을떄~ 
function throwError(message: string): never {
    // 함수가 끝나지 않아! 
}

// 📌 objet
let obj: object
function acceptSomeObject(obj:object) {}

}