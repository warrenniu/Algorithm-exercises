var removeDuplicates = function(nums) {
    const expectedNums = nums.filter((value, index) => {
        console.log(nums,"value: ", value , "index: ", index)
        console.log(nums.indexOf(value))
        //indexOf returns the first index that the value occurs in. Therefore, if one is already encountered, it won't match the index of the current duplicate value
        return nums.indexOf(value) === index
        
    });
    return expectedNums
};

console.log(removeDuplicates([1,2,1, 14,31,2]))