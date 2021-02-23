
   function solve(num) {
        Array.from(String(num), Number);
        console.log(num)
        let left = 0
        let right = num.length - 1

    while (left < right) {
        if (num[left] !== num[right]) {
            return false
        }
        else {
            left++
            right++
        }
    }
    return true
}

console.log(solve(43))