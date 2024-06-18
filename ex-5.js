let students = [
  {
    studentName : "James",
    studentScore : 40
  },
  {
    studentName : "Ann",
    studentScore : 80
  },
  {
    studentName : "Joe",
    studentScore : 52
  },
  {
    studentName : "Ball",
    studentScore : 67
  },
  {
    studentName : "Mick",
    studentScore : 89
  },
  {
    studentName : "Ole",
    studentScore : 10
  }
]

// Start coding here
let totalScore = 0;
for (let i = 0; i < students.length; i++) {
  totalScore += students[i].studentScore;
}
let averageScore = totalScore / students.length;
console.log(`Average score is ${averageScore}`);

let highestScore = students[0];
for (let i = 0; i < students.length; i++) {
  if (students[i].studentScore > highestScore.studentScore) {
    highestScore = students[i];
  }
}
console.log(`${highestScore.studentName} has the highest score, which is ${highestScore.studentScore} points`);

let lowestScore = students[0];
for (let i = 0; i < students.length; i++) {
  if (students[i].studentScore < lowestScore.studentScore) {
    lowestScore = students[i];
  }
}
console.log(`${lowestScore.studentName} has the lowest score, which is ${lowestScore.studentScore} points`);

