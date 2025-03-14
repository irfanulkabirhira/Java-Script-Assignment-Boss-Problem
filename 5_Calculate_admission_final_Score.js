function calculateFinalScore(examScore, schoolGrade, parentProfession) {
    // Validate 'examScore' (must be a number between 0 and 100)
    if (typeof examScore !== 'number' || examScore < 0 || examScore > 100) {
        return "Invalid Input";
    }

    // Validate 'schoolGrade' (must be a number between 0 and 5)
    if (typeof schoolGrade !== 'number' || schoolGrade < 0 || schoolGrade > 5) {
        return "Invalid Input";
    }

    // Validate 'parentProfession' (must be a string)
    if (typeof parentProfession !== 'string') {
        return "Invalid Input";
    }

    // Compute the final score
    let finalScore = examScore + (schoolGrade * 10);

    // If parent is a 'farmer', add an extra 10 points
    if (parentProfession.toLowerCase() === 'farmer') {
        finalScore += 10;
    }

    return finalScore;
}

// ✅ **Test Cases**
console.log(calculateFinalScore(85, 4, "farmer"));  // Expected: 135  (85 + 40 + 10)
console.log(calculateFinalScore(75, 3, "teacher")); // Expected: 105  (75 + 30)
console.log(calculateFinalScore(90, 5, "Farmer"));  // Expected: 150  (90 + 50 + 10)
console.log(calculateFinalScore(50, 2, "engineer"));// Expected: 70   (50 + 20)
console.log(calculateFinalScore(120, 3, "doctor"));// Expected: "Invalid Input" (examScore > 100)
console.log(calculateFinalScore(80, -1, "farmer"));// Expected: "Invalid Input" (schoolGrade < 0)
console.log(calculateFinalScore(60, 3, 12345));    // Expected: "Invalid Input" (parentProfession is not a string)
console.log(calculateFinalScore("80", 3, "nurse"));// Expected: "Invalid Input" (examScore is not a number)
console.log(calculateFinalScore(70, 2.5, "farmer"));// Expected: 95 (70 + 25)

