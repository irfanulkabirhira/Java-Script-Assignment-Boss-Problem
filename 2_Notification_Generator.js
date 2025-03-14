function sendNotification(email) {
    // Validate if the input is a string and contains '@' symbol
    if (typeof email !== 'string' || !email.includes('@')) {
        return "Invalid Email: The input must be a valid email string.";
    }

    // Split the email into username and domain parts
    let parts = email.split('@');

    // A valid email should have exactly one '@' symbol separating the username and domain
    if (parts.length !== 2) {
        return "Invalid Email: Email must contain exactly one '@' symbol.";
    }

    let userName = parts[0].trim(); // Removing extra spaces if any
    let domainName = parts[1].trim(); // Removing extra spaces if any

    // Additional validation to check if username and domain are not empty
    if (userName === '' || domainName === '') {
        return "Invalid Email: Email username or domain cannot be empty.";
    }

    // Return a message with the extracted username and domain
    return `${userName} sent you an email from ${domainName}`;
}

// Example Usage
console.log(sendNotification("user@example.com"));  // Valid email
console.log(sendNotification("hello@domain.com"));  // Valid email
console.log(sendNotification("invalidemail.com"));  // Invalid (No '@' symbol)
console.log(sendNotification("user@"));             // Invalid (No domain part)
console.log(sendNotification("@domain.com"));       // Invalid (No username part)
console.log(sendNotification("user@@domain.com"));  // Invalid (Multiple '@' symbols)
console.log(sendNotification(12345));               // Invalid (Not a string)
console.log(sendNotification("   user@domain.com   ")); // Valid (Extra spaces handled)
