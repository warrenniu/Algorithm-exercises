//=========================================================================================
//Given S which eachs to day, and given K which is the number of days, return the current day
//=========================================================================================

//CONSTRAINTS


//START OF FUNCTION
function solution(S,K) {
    //Assigning each day of the week to a value
    let days = ["Mon","Tues","Wed","Thu","Fri","Sat","Sun"]
    let startDay = 0
    let counter = 0
    for (let i = 0; i<days.length; i++){
        if (S === days[i]){
            startDay = i;
        }    
    }
    console.log("start day", startDay)
    console.log("counter", counter)
    for (let j = startDay; counter <= K ; j++ ){
        console.log("counter",counter)
        if(j > 6){
            j = 0
        }
        if(counter === K){
            
            return days[j]
        }
        counter++
    }
   
}

console.log(solution("Wed",7))