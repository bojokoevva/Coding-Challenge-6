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

//Task 3: Employee Bonus Calculation
// Arrow function to calculate bonus based on performance rating
const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
    if (performanceRating === "Excellent") bonus = salary * 0.2;
    else if (performanceRating === "Good") bonus = salary * 0.1;
    else if (performanceRating === "Average") bonus = salary * 0.05;
    console.log(`Bonus: $${bonus}`);
    return bonus;
};
// Test cases for bonus calculation
calculateBonus(5000, "Excellent"); 
calculateBonus(7000, "Good"); 


//Task 4: Subscription Pricing Model 
// Function to calculate subscription cost based on plan, months, and optional discount
function calculateSubscriptionCost(plan, months, discount = 0) {
    let costPerMonth = 0;
    if (plan === "Basic") costPerMonth = 10;
    else if (plan === "Premium") costPerMonth = 20;
    else if (plan === "Enterprise") costPerMonth = 50;

    let totalCost = (costPerMonth * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
    return totalCost;
}
// Test cases for subscription cost calculation
calculateSubscriptionCost("Basic", 6, 10);
calculateSubscriptionCost("Premium", 12, 0);


//Task 5: Currency Conversion ===
// Function to convert currency based on amount and exchange rate
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = (amount * exchangeRate).toFixed(2);
    console.log(`Converted Amount: $${convertedAmount}`);
    return convertedAmount;
}
// Test cases for currency conversion
convertCurrency(100, 1.1); 
convertCurrency(250, 0.85);

//Task 6: Higher-Order Function for Bulk Orders 
// Function to apply bulk discount on orders above $500
function applyBulkDiscount(orders, discountFunction) {
    let discountedOrders = orders.map(discountFunction);
    console.log(discountedOrders);
    return discountedOrders;
}
// Array of order amounts
let orders = [200, 600, 1200, 450, 800];
// Applying the discount using a higher-order function
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);