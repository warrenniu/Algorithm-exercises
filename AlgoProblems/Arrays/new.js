class Solution {
    solve(x, y) {
        let binXArr = x.toString(2).split('').reverse()
        let binYArr = y.toString(2).split('').reverse()
        let count = 0
        // console.log(binXArr, binYArr)
        for (let i = 0; i < binYArr.length || i < binXArr.length; i++){
            // console.log(binXArr[i], binYArr[i])
            if (binXArr[i] !== binYArr[i]){
                count++
                // console.log("count", count)
            }
        }
        return count
    }
}