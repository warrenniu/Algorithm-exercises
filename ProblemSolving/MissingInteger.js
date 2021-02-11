function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sort = A.sort((a,b) => a-b)
    let x = 0
    
    let newarray = []

    for (number of sort){
     if(number < 1)
        return 1
    }

    for (number of sort){
        if (number > x ){
            x = number
            newarray.push(number)
        }
    }

    let y = newarray[0]
    
    console.log(newarray)
    // for ( let i = 0; i < newarray.length; i++){

    //     if (newarray[i] !== i){
    //         x = i
    //         return x + 1
    //     }
    // }
 if (newarray.length <= 1 ){
     return 1
 }
 else{
     for (let i = 0; i < newarray.length; i++){
              if(y < newarray[i]){
                  return y
              }
              y++
     }

 }

   return y 
   //input:[100,102,103]
   //output:[101]
   }

   console.log(solution([1,2]))