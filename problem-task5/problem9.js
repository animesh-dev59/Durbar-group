

function groupStudentsByGradeBand(students) {
  return students.reduce(
    (acc, student) => {
      if (student.marks >= 80) {
        acc.A.push(student);
      } else if (student.marks >= 70) {
        acc.B.push(student);
      } else if (student.marks >= 60) {
        acc.C.push(student);
      } else {
        acc.F.push(student);
      }
      return acc;
    },
    { A: [], B: [], C: [], F: [] }
  );
}