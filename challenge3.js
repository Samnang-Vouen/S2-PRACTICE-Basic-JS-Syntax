function calculateAverage(grades) {
    if (grades.length === 0) {
        return 0;
    }
    
    let sum = grades.reduce((total, grade) => total + grade, 0);
    
    return sum / grades.length;
}
console.log("Calculate the average grade of a list of students:");

console.log("Grade = [85, 90, 78, 92]");
console.log("Average grade: ", calculateAverage([85, 90, 78, 92]));  

console.log("Grade = [10, 20, 30]");
console.log("Average grade: ", calculateAverage([10, 20, 30]));   

console.log("Grade = []");
console.log("Average grade: ", calculateAverage([]));             
