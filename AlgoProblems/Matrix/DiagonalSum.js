//===============================================================================
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
//===============================================================================

//Constraints
// n == mat.length == mat[i].length
// 1 <= n <= 100
// 1 <= mat[i][j] <= 100

//Steps
//Instantiate a count variable - set it to 0
//Outer for loop that will loop the length of mat, i++
//Inner for loop that will iterate the length of mat[j]
//If mat[i] === 0 or -1, sum the first and last element of the array
//Else, sum all the elements that are NOT first and last element of the array
//Return count at end of function

// function diagonalSum(mat) {
//     console.log(mat)
//     let count = 0;

//     for (let i = 0; i < mat.length; i++) {
//         console.log(mat[i])
//         for (let j = 0; j < mat[i].length; j++) {
//             console.log(mat[i][j])
//             console.log(mat[j])
//             if (mat[0] || mat[mat.length - 1]) {
//                 console.log(mat[mat.length - 1])
//                 count += mat[i][0]
//                 console.log(count, mat[i][0])
//             }
//         }
//     }
// return count
// }

function diagonalSum(mat) {
    const length = mat.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        console.log(mat[i][i])
        count += mat[i][i]
        console.log(count, mat[i][i])
        console.log(length - i - 1)

        if (length - i - 1 != i) {
            console.log(count,  mat[length - i - 1][i])
            count += mat[length - i - 1][i]
        }
    }

    return count
}

console.log(diagonalSum([[1,2,3], [4,5,6], [7,8,9]]))