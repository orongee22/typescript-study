{
  /**
   * Enum :: 여러가지 관련된 상수값들을 모아서 정의할 수 있게 도와주는 타입, But JS에선 Enum이 없어어
   * ts에서 자체적으로 제공해주는 타입
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 }); // 다른 언어에서 쓰는 ENUM과 유사
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday, // 0
    // Monday = 1, // 이렇게 되면 1부터 시작함
    // Mondayy = 'Mon', 스트링으로 지정 할 경우 자동으로 계산을 할 수가 없기때문에 하나씩 지정해줘야햠
    Tuesday, // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  // 사실 ts에선 Enum을 추천하지 않아
  // enum으로 지정된 타입에 다른 타입의 숫자를 넣을 수 있어!!
  // enum을 쓰게되면 타입이 보장되지 않아요...
  // 🌟 대신 Union타입을 활용함
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  // day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  // dayOfweek = 'ellie'; 일경우 에러남
  // 🌟 단 모바일 클라이언트와 의사소통이 필요한 경우는 enum타입이 필요해요!!! 그 이외가 아니면 유니언타입을 사용하는게 좋아
  dayOfweek = 'Wednesday';
}
