function calculateFinalScore(input) {
    // Check if input is an object with the required properties
    if (typeof input !== "object" || input === null) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFamily } = input;

    // Validate data types
    if (
        typeof name !== "string" ||
        typeof testScore !== "number" || testScore > 50 ||
        typeof schoolGrade !== "number" || schoolGrade > 30 ||
        typeof isFamily !== "boolean"
    ) {
        return "Invalid Input";
    }

    // Eligibility criteria
    if (testScore >= 50 || schoolGrade >= 30) {
        return false;
    }

    if (isFamily) {
        return true;
    }

    return false;
}

// Sample Inputs and Testing
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFamily: true }));  // true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFamily: false })); // false
console.log(calculateFinalScore("hello")); // "Invalid Input"
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFamily: true }));  // false
