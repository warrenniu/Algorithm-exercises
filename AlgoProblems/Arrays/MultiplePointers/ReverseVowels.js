//===============================================================================
//Given a string s, reverse only all the vowels in the string and return it. The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.
//===============================================================================

//Constraints
// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


//Steps
//1. Instantiatte a vowelArray that has all of our vowels (both lowercase and uppercase)
//2. Set up a left and right pointer (left at index 0, right at last index)
//3. Turn the input string into an array so we can mutate it
//4. Set up a while loop where left < right, increase left and decrement right by 1 each iteration
//5. Check if left value is a vowel. If it is, check right value is vowel. If it is, swap. If not, decrement right
//6. Return vowelArray to String at end of function

function reverseVowels(s) {
    const vowelArray = ["a","e","i","o","u","A","E","I","O","U"];
    let array = s.split('')
    console.log(array)
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) {
        console.log("left", array[left], "right", array[right])
        if (vowelArray.includes(array[left])) {
            if (vowelArray.includes(array[right])) {
                let temp = array[left]
                array[left] = array[right]
                array[right] = temp
                left++
                right--
            }
            else {
                right--
            }
        }
        else if (vowelArray.includes(array[right])) {
            if (vowelArray.includes(array[left])) {
                let temp = array[left]
                array[left] = array[right]
                array[right] = temp
                left++
                right--
            }
            else {
                left++
            }
        }
        else {
            left++
            right--
        }
    }
return array.join('')
}

console.log(reverseVowels("leetcode"))

//leetcode
// var reverseVowels = function(s) {
//     if(s === null || s.length === 0) {
//         return s;
//     }
//     var chars = s.split('');
//     var low = 0;
//     var high = s.length - 1;
//     var vowels = "aeiouAEIOU";
//     var tmp;
//     while(low < high) {
//         while(low < high && vowels.indexOf(chars[low]) === -1) {
//             low++;
//         }
        
//         while(low < high && vowels.indexOf(chars[high]) === -1) {
//             high--;
//         }
        
//         tmp = chars[high];
//         chars[high] = chars[low];
//         chars[low] = tmp;
//         low++;
//         high--;
//     }
    
//     return chars.join('');
// };