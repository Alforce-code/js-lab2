// Task 6: Calculate Bonus Based on Years of Service and Salary
// This code calculates the bonus based on the number of years an employee has worked and their salary. 
// If the employee has worked for more than 5 years, they receive a 10% bonus.
// If they have worked for 3 to 4 years, they receive a 5% bonus. 
// If they have worked for less than 3 years, no bonus is given.    
function calculateBonus(yearsOfService, salary) {
    let bonus = 0;  
    if (yearsOfService > 5) {
        bonus = salary * 0.10;  
    }
    else if (yearsOfService >= 3) {
        bonus = salary * 0.05;  
    }
    return bonus;

}
const yearsOfService = 4;
const salary = 50000;
const bonusAmount = calculateBonus(yearsOfService, salary);
console.log(`The bonus amount is: MK${bonusAmount.toFixed(2)}`);
