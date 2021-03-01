//===============================================================================
//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false
//===============================================================================

// SAMPLE INPUT/OUTPUT
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if (str.length <= 1) return true
    let [firstLetter] = str
    let lastLetter = str[str.length - 1]
    console.log(firstLetter)
    console.log(lastLetter)

    if (firstLetter === lastLetter) {
        let newString = str.substring(1,str.length - 1)
        return isPalindrome(newString)
    }
    else {
        return false
    }


}

console.log(isPalindrome('tacocat'))



wp.ajax({
    url: ''
})
