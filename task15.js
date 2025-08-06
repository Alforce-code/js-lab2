//function takes an array of numbers , finds its min, max, mean and returns and array or objects containing the results
const calculateStats = (numbers) => {
    if (numbers.length === 0) {
        return { min: null, max: null, mean: null };
    }
    let min = numbers[0];
    let max = numbers[0];
    let sum = 0;    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
        sum += numbers[i];
    }
    const mean = sum / numbers.length;
    return { min, max, mean };
}
const numbersArray = [5, 10, 15, 20, 25];
const stats = calculateStats(numbersArray);
console.log(`const result ={Min: ${stats.min}, Max: ${stats.max}, Mean: ${stats.mean}}`);