const studentGrade= (score)=>{
    if(score>=90 && score<=100){
        console.log("Your Grade is A")
    }else if(score>80 && score<=89){
        console.log("Your Grade is B")
    }else if(score>70 && score<=79){
        console.log("Your Grade is C")
    }else if(score>60 && score<=69){
        console.log("Your Grade is B")
    }else if(score<60 ){
        console.log("Your Grade is F")
    }else{
        console.log("Did'nt write")
    }
}
studentGrade(65);
