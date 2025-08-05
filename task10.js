const secondsToOthers=(seconds)=>{
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let weeks = Math.floor(days / 7);   
    let months = Math.floor(days / 30);
    let years = Math.floor(days / 365);
    return {
        minutes: minutes,
        hours: hours,
        days: days,
        weeks: weeks,
        months: months,
        years: years
    };
}
const seconds = 1000000;
const result = secondsToOthers(seconds);
console.log(`For ${seconds} seconds, the equivalent is:
- ${result.minutes} minutes     
- ${result.hours} hours
- ${result.days} days       
- ${result.weeks} weeks
- ${result.months} months
- ${result.years} years`);
