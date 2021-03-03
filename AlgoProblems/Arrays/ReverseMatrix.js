class Solution {
    solve(matrix) {
        let reverseMatrix = []
        for (let i = 0; i < matrix.length; i++){
            reverseMatrix.push(matrix[i].reverse())
        }
        let flipMatrix = []
        for (let i = 0; i < reverseMatrix.length; i++){
            let miniArr = []
            for (let j = 0; j < reverseMatrix[i].length; j++){
                if (reverseMatrix[i][j] === 1){
                    miniArr.push(0)
                } else {
                    miniArr.push(1)
                }
            }
            flipMatrix.push(miniArr)
        }
        return flipMatrix
    }
}