{
  // Enum : 여러가지의 관련된 상수 값들을 한곳에 모아서 정의 할 수 있는 타입

  // Javascript
  const Max_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Tyursday,
    Fridaty,
    Saturday,
    Sunday,
  }
  console.log(Days.Saturday);
  const day = Days.Saturday;
  console.log(day);
}
