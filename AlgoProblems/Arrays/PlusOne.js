//===============================================================================
//Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer. The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit. You may assume the integer does not contain any leading zero, except the number 0 itself.
//===============================================================================

//Constraints
//1. 1 <= digits.length <= 100
//2. 0 <= digits[i] <= 9
//Case
//[1,0,0,1]

//Steps
//1. check if index of J === 9?
//2. if 9 > set to 0
//2a. unshift 1 to I 


function plusOne(arr){

   for(let i = arr.length - 1; i>=0; i--){
     
       if(arr[i] === 9){
           arr[i] = 0
       }else{
           arr[i] += 1
           return arr
       }     
   }

      arr.unshift(1)
      
      return arr
}


// for(var i = arr.length - 1; i >= 0; i--){
//     if(arr[i]++ > 9) arr[i] = 0;
//     else return arr;
//   }
//   arr.unshift(1);
//   return arr;
// }

console.log(plusOne([9,2,9]))