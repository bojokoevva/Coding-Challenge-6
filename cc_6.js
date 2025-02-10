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

