// For a given array with marks of students -> [85,97,44,37,76,60] 

// find the average marks of entire class 

let marks = [85, 97, 44, 37, 76, 60];
let totalMarks = 0; 

for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
}

let averageMarks = totalMarks / marks.length;
console.log(averageMarks);
