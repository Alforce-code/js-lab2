const numbers = (num1,num2,num3)=>{
    let greatest = num1;
    if(num2>greatest){
        greatest = num2
    }else{
        greatest = num3;
    }
}
const num1 = 10;
const num2 = 20;
const num3 = 15;
numbers(num1,num2,num3);
console.log(`The greatest number is: ${greatest}`);