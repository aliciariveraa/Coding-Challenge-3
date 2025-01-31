// Task 1: Product Price Management
let prices = [45, 49, 12, 144, 55]; // Declare an array with at least 5 prices
// Add a new price to the array
prices.push(23);
// Remove the first price from the array
prices.shift();
// Log the updated array to the console
console.log('Updated Price List:', prices);
// Task 2: Modifying Customer Orders
let orders = [6, 24, 5, 3, 6]; // Declare an array with at least 5 order quantities
// Increase the third order quantity by 5
orders[2] += 5;
// Calculate the total number of all orders
let totalOrders = orders.reduce((sum, order) => sum + order, 0);
// Log the updated array and total order count to the console
console.log('Updated Orders:', orders);
console.log('Total Orders:', totalOrders);
// Task 3: Employee Performance Tracking
let employee = {
    name: 'Terri Joe',
    role: '	Anesthesiologists',
    performanceScore: 75,  // Original performance score
    isActive: true         // Employee is active
};
// Update the performance score
employee.performanceScore = 90;
// Add a new property "promotionEligible"
employee.promotionEligible = employee.performanceScore >= 90;
// Log the updated employee object to the console
console.log('Updated Employee Data:', employee);
// Task 4: Customer Feedback Records
let feedback = [
    { customerName: 'William', feedbackText: 'Very satisfied!', rating: 5 },
    { customerName: 'Carry', feedbackText: 'Could be better.', rating: 3 },
    { customerName: 'Vanessa', feedbackText: 'Not satisfied.', rating: 1 }
];
// Add a new feedback object to the array
feedback.push({
    customerName: 'Jonathon',
    feedbackText: 'Outstanding experience!',
    rating: 5
});
// Log the entire feedback list to the console
console.log('Customer Feedback:', feedback);