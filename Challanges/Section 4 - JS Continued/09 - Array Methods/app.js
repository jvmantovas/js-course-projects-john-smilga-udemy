const updatedStudents = students.map(function (student) {
  student.role = "student";
  return student;
});
console.log(updatedStudents);

const highScores = students.filter(function (student) {
  return student.score >= 80;
});
console.log(highScores);

const specificId = students.find(function (student) {
  return student.id === 3;
});
console.log(specificId);

const averageScore =
  students.reduce(function (scoresTotal, student) {
    return scoresTotal + student.score;
  }, 0) / students.length;
console.log(averageScore);

const survey = students.reduce(function (survey, student) {
  const favSubject = student.favoriteSubject;
  if (survey[favSubject]) {
    survey[favSubject] = survey[favSubject] + 1;
  } else {
    survey[favSubject] = 1;
  }
  return survey;
}, {});

console.log(survey);
