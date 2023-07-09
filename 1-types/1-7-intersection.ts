// union은 많인 것중이 하나만 (or) | intersection 이거랑 이거랑 같이..!!(and)
{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) { // 학생이면서 일을 하는 사람..!!
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: 'ellie',
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
