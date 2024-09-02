const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(array) {
    let gradeSum = 0;
    for (let index of array) {
        gradeSum = gradeSum + index;
    }
    let grade = gradeSum / array.length;
    console.log(grade);
    if (1 <= grade && grade <= 59)
        return 'F';
    else if (59 < grade && grade <= 69)
        return 'D';
    else if (69 < grade && grade <= 79)
        return 'C';
    else if (79 < grade && grade <= 89)
        return 'B';
    else if (89 < grade && grade <= 100)
        return 'A';

}
