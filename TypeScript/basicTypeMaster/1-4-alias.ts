{
  /**
   * Type Aliases
   * 원하는 새로운 타입을 직접 정의 할 수 있다.
   * 원시 타입, 문자열, 오브젝트 등 다양한 타입을 지정할 수 있다.
   * 값 자체를 타입으로 지정할 수 있다.
   * 타입을 지정할 때 변수명의 첫글자는 대문자로 시작한다.
   */

  type Text = string; // Text란 타입은 문자열을 의미한다.
  const name: Text = 'lanie';
  const address: Text = 'korea';

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'seohyun',
    age: 37,
  };

  // String Literal Types
  type Name = 'lanie';
  let lanieName: Name;
  lanieName = 'lanie';
}
