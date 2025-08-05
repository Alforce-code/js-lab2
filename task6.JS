
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
