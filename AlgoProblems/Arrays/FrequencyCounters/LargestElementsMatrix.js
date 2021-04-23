// You are given a two-dimensional list of integers matrix containing 1s and 0s. Return the number of elements in matrix such that:

// matrix[r][c] = 1
// matrix[r][j] = 0 for every j ≠ c and matrix[i][c] = 0 for every i ≠ r

//Constraints
// 0 ≤ n, m ≤ 250 where n and m are the number of rows and columns in matrix

// Example 1
// Input
// matrix = [
//     [0, 0, 1],
//     [1, 0, 0],
//     [0, 1, 0]
// ]
// Output
// 3
// Explanation
// We have matrix[0][2], matrix[1][0] and matrix[2][1] meet the criteria.

// Example 2
// Input
// matrix = [
//     [0, 0, 1],
//     [1, 0, 0],
//     [1, 0, 0]
// ]
// Output
// 1
// Explanation
// Only matrix[0][2] meet the criteria. The other two 1s share the same column.


class Solution {
    solve(matrix) {
        let count = 0
        const rowLength = matrix[0].length

        for(let i = 0; i < matrix.length; i +=1 ){
            for(let j = 0; j < rowLength; j += 1){
                if(matrix[i][j] === 1){
                    const rowFreq = {}
                    matrix[i].forEach(num => {
                        if(!rowFreq[num]){
                            rowFreq[num] = 1
                        } else {
                            rowFreq[num] += 1
                        }
                    })
                    if(rowFreq[1] === 1){
                       const colFreq = {}
                       matrix.forEach(row => {
                           if(!colFreq[row[j]]){
                               colFreq[row[j]] = 1
                           } else {
                               colFreq[row[j]] += 1
                           }
                       })
                       if(colFreq[1] === 1){
                           count += 1
                       }
                    }
                }
            }
        }

        return count
        // const array = [1,2,3,4,5,6,7]

        // //array.length => 7
        // //array[3] => 4

        

        // matrix = [ [0, 0, 1], [1, 0, 0], [0, 1, 0] ]

        // matrix = [
        //     [0, 0, 1],
        //     [1, 0, 0],
        //     [0, 1, 0]
        // ]

    }
}