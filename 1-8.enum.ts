{
  enum Days {
    Mon = 0,
    Tue = 1,
    Wed = 2,
    Thu = 3,
    Fri = 4,
    Sat = 5,
    Sun = 6,
  }

  enum Days1 {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
  }

  enum DaysStr {
    Mon = "mon",
    Tue = "tue",
    Wed = "wed",
    Thu = "thu",
    Fri = "fri",
    Sat = "sat",
    Sun = "sun",
  }

  let day: Days = 0;
  console.log(day); // 0; 문제 없이 잘 나옴.......;;

  type Days2 = {
    Mon: 0;
    Tue: 1;
    Wed: 2;
    Thu: 3;
    Fri: 4;
    Sat: 5;
    Sun: 6;
  };

  //   let day1: Days2 = 0;
  //   console.log(day1); // number 타입은 지정 못한다며 에러 발생시킴
}
