{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: "yerina",
    score: 10,
    employeeId: 339495,
    work: () => "Hard Work!",
  });
}
