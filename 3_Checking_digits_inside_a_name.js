function checkDigitsInName(name) {
    // Ensure the input is exactly a string [ not numbers, arrays, objects, etc. ]
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    // Check if the string contains at least one numeric digit (0-9)
    for (let char of name) {
        if (char >= '0' && char <= '9') {
            return true; // Digit found
        }
    }

    return false; // No digits found
}

// Testing with sample inputs
console.log(checkDigitsInName("Raji123"));  // true
console.log(checkDigitsInName("n9ayeem"));  // true
console.log(checkDigitsInName("e1mu3"));    // true
console.log(checkDigitsInName("Suman"));    // false
console.log(checkDigitsInName("Name2024")); // true
console.log(checkDigitsInName("!@#"));      // false
console.log(checkDigitsInName(["Raj"]));
