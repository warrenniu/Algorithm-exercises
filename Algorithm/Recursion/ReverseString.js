//===============================================================================
//Write a recursive function called reverse which accepts a string and returns a new string in reverse
//===============================================================================

// SAMPLE INPUT/OUTPUT
// reverse('awesome') // 'emosewa
// reverse('rithmschool) // 'loohcsmhtir' 

function reverse(str) {
    if (str.length === 0) return ""
    return str.substring(str.length, str.length - 1) + reverse(str.substring(0, str.length - 1))
}

console.log(reverse('awesome'))