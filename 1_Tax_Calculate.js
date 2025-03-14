/*
Problem-01: Tax Calculator
=================================
Say Income = 10000 , Expence = 3000
profite = 10000 - 3000
tax = (profite - 0.2)

Short Note :
=================
console.log(typeof 1000); // "number"
console.log(typeof "1000"); // "string"
console.log(typeof true); // "boolean"
*/

function calculateTax(income, expense) {
    // Validate inputs--> Jodi Number na dei income and Expence
    if (typeof income !== 'number' || typeof expense !== 'number') {
        return "Invalid Input: Income and expense must be numbers";
    }
    // jodi -ve hote parbe nah
    if (income < 0 || expense < 0) {
        return "Invalid Input: Income and expense must be non-negative";
    }
    // Income can never be less than Expense
    if (income < expense) {
        return "Invalid Input: Income cannot be less than expense";
    }
    // Calculate the taxable amount [ 20% of the profit after expenses ]
    let profit = income - expense;
    let tax = profit * 0.2;

    // Return the calculated tax amount
    return tax;
}

let income = 7000
let expense = 3000
console.log("Tax amount : ", calculateTax(income, expense));

