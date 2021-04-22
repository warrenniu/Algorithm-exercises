//Radix Sort Pseudocode
// - Define a function that accepts list of numbers
// - Figure out how many digits the largest number has
// - Loop from k = 0 up to this largest number of digits
// - For each iteration of the loop: → Create buckets for each digit (0 to 9). Place each number in the corresponding bucket based on its kth digit
// - Replace our existing array with values in our buckets, starting with 0 and going up to 9
// - Return list at the end

//Helper Functions
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

//radix sort
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        //creating our buckets -> 10 empty arrays
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            //sorting the numbers into their respective buckets
            let digit = getDigit(nums[i], k); 
            digitBuckets[digit].push(nums[i])
        }
        //putting the newly sorted numbers in their buckets in a new array after each iteration. We're using spread operater so its just one array and not arrays inside an array
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets)
        console.log(nums)
    }
    return nums
}

console.log(radixSort([56,32,56789,99,45,457,789]))