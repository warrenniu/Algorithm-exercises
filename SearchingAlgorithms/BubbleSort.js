//===============================================================================
//Write a function that finds a substring within a longer string
//===============================================================================

// SAMPLE INPUT/OUTPUT

// naiveString('zomgzomg'. 'omg') //2

//Steps
//1. Loop over the longer string
//2. Loop over the shorter string
//3. If the characters don't match, break out of the inner loop
//4. If the characters do match, keep going
//5. If you complete the inner loop and find a match, increment the count of matches
//6. Return the count

// function naiveString(str1, str2) {
//     let count = 0;
//     let i = 0;

//     while (i < str1.length) {
//         console.log(i)
//         for (let j = 0; j < str2.length; j++) {
//             console.log(j)
//             if (str2[j] === str1[i] && j === str2.length - 1) {
//                 count++
//                 i++
//                 console.log(count)
//             }
//             else if (str2[j] === str1[i]) {
//                 continue
//             }
//             else if (str2[j] !== str1[i] ) {
//                 i++
//             }
//         }
//     }
//     return count
// }

function naiveString(long,short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j],long[i+j])
            if (short[j] !== long[i+j]) {
                console.log("break!")
                break
            }
            if (j === short.length - 1) {
                console.log("Found One")
                count++
            }

        }
    }
    return count
}

console.log(naiveString('zomgzomg', 'omg'))

// for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//         if (str2[j] !== str1[i]) {
//             break
//         }
//         else if (j === str2.length  ){
//             count++
//             continue
//         }
//     }
// }
// return count