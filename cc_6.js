// Task 1: Business Profit Calculation

// Function to calculate total profit based on cost price, selling price, and units sold
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
    return profit;
}
// Test cases for profit calculation
calculateProfit(20, 30, 100); 
calculateProfit(50, 70, 200); 

//Task 2: Sales Tax Computation
// Function expression to compute sales tax given an amount and tax rate
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`);
    return tax;
        };
        // Test cases for sales tax calculation
        calculateSalesTax(100, 0.07); 
        calculateSalesTax(500, 0.1);
