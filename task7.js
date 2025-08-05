const from20To5 = (arr)=>{
    for(let i=20; i>=5;i--){
        if(arr.includes(i)){
            console.log(i);
        }
    }

}
from20To5([10, 15, 20, 25, 30, 5, 7, 8, 9]);