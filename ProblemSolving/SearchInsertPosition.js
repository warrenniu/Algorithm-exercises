//==========================================
//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//==========================================

function searchInsert(nums, target) {
    let lastIndex = 0
    for (let i = 0; i < nums.length; i++) {
        lastIndex = nums[i]
        if (nums[i] === target || target === 0) {
            return i
        }
        else if (target - 1 === lastIndex || target + 1 === lastIndex) {
            return i
        }  
    }
}





function searchInsert(nums, target) {
    let lastIndex = 0
    let arraylength = nums.length
   
    if (target > nums[arraylength - 1]){
        return arraylength 
    }

    for (let i = 0; i < nums.length; i++) {
        lastIndex = nums[i]
        if (nums[i] === target || target === 0) {
            return i
        }
        else if (target - 1 === lastIndex) {
            return i + 1
        }  
        else if ( target + 1 === lastIndex){
            return i
        }
    }
}



//[2,3,4,7,8,9].length = 6
//11
//nums[5]

//[3,6,7,8,10]  target 5
//expected output: 1


//first iteration
// i = 0
//lastindex = 3
//5 - 1 === 3


//second iteration
//i = 1
//lastindex = 6
//5 - 1 === 6
//

//third iteration
//i = 2
//lastindex = 8
// 10 - 1 = 8

//fourth 
//i = 3
//lastindex = 9
//10- 1 = 9
//4