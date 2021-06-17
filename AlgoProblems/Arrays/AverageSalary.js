//===============================================================================
// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.
//===============================================================================

//Constraints
// 3 <= salary.length <= 100
// 10^3 <= salary[i] <= 10^6
// salary[i] is unique.
// Answers within 10^-5 of the actual value will be accepted as correct.

//Steps O (N log N)
//1. Initialize a variable that will hold the total sum. Call it total
//1. Initialize a variable that sorts the input array in ascending order. Call it sortedArray
//2. Remove the first & last element in the array. Use splice
//3. Initialize a variable that holds the length of the sortedArray after splicing. Call it size
//4. Initialize a for loop -> add up all of the integers in the array and add it to total
//5. return total / size

function average(salary) {
    let total = 0;
    let sortedArray = salary.sort(function(a,b) { return a-b})
    console.log(sortedArray)

    sortedArray.splice(0,1)
    sortedArray.splice(-1)
    console.log(sortedArray)

    const size = sortedArray.length;
    console.log(size)

    for (let i = 0; i < size; i++) {
        total += sortedArray[i]
    }
    console.log(total)

    return total / size

}

console.log(average([6000,5000,4000,3000,2000,1000]))