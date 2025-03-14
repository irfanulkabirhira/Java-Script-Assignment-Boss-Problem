function checkDigitsInName(name) {
    // Step 1: Validate input to ensure it's a string
    if (typeof name !== 'string') {
        return "Invalid Input: Name must be a string.";
    }

    // Step 2: Check if the string contains any numeric digit (0-9)
    let hasDigits = /\d/.test(name);

    // Step 3: Return result
    return hasDigits ? "The name contains a digit." : "The name does not contain any digits.";
}

// Example Usage:
console.log(checkDigitsInName("John123"));  // ✅ Contains digits
console.log(checkDigitsInName("Alice"));    // ❌ No digits
console.log(checkDigitsInName("Mike1Doe")); // ✅ Contains digits
console.log(checkDigitsInName(""));         // ❌ No digits (empty string)
console.log(checkDigitsInName(12345));      // ❌ Invalid Input (not a string)
console.log(checkDigitsInName("Tommy_7"));  // ✅ Contains digits
console.log(checkDigitsInName("Hello World!")); // ❌ No digits
