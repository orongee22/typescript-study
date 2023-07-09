{
  // 📌 Enum
  // 관련된 상수값을 그룹화 하는거 같움
  // 타입스크립트에서 Enum은 가능한 쓰지 않는것이 좋데요 > 타입이 정확하게 보장되지 않거든요! 
  // union 타입을 쓰는게 좋아요! 
  
  const MAX_NUM = 6;
  const MAX_STUNDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({'MONDAY': 0, 'TUESDAY': 1, 'WEDNESDAY': 2})
  const dayOfToday = DAYS_ENUM.MONDAY;

  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' 
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  console.log(Days.Tuesday)
  const day = Days.Saturday;
  console.log(day)

  let dayOfWeek: DaysOfWeek = 'Monday'
}