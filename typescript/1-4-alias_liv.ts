{
  // 📌 Type Aliases
  type Text = string;
  const name: Text = 'ellis'
  const address: Text = 'korea'

  type Num = number;
  type Student = {
    name: string,
    age: number
  }
  const student: Student = {
    name: 'ellie',
    age: 12,
  }

  // 📌 String Literal Types
  // 실제 값 자체를 타입으로 만듬. 
  type Name = 'name';
  let ellieName : Name;
  ellieName = 'name';
  type JSON = 'json'
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}