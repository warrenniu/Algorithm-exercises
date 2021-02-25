//Constraints
//1. Assume your users will watch exactly two movies
//2. Don't make your users watch the same movie twice
//3. Optimize your runtime over memory
//4. Time complexity: O(N)


function flightMovie(arr,flightLen){

 let newSet = new Set()
 //{52,100,85,90}
    

 for(let i = 0; i<arr.length; i++){
    let remainder = flightLen - arr[i]
    if(newSet.has(remainder)) return true
    newSet.add(arr[i])
    // let totalMovieMins = arr[i]  + arr[i + 1]
//      if(totalMovieMins === flightLen){
//          return true
//      }
    
 }
 return false
}

console.log(flightMovie([52,100,85,70,85],170))


