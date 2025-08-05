const multplyByTen = (num)=>{
    let result = num * 10;
    if(isNaN(num)){
        return "Please enter a valid number";
    }else{
        return `The result of multiplying ${num} by 10 is: ${result}`;
    }
}
const number = 'Hello'; 
const result = multplyByTen(number);
console.log(result);