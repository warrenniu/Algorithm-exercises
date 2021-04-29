// function rotateString(A,B) {
//     let Aarray = A.split("")
//     const ALength = Aarray.length

//     if (A === "" && B === "") {
//         return true
//     }
//     for (let i = 0; i < ALength; i++) {
//         let char = Aarray.pop()
//         let currentString = Aarray.unshift(char)

//         if (Aarray.join("") === B) {
//             return true
//         }
//     }
//     return false
// }


function rotateString(A,B) {
    let newString = A.concat(B)
    return newString.includes(B)
    
}
console.log(rotateString("waterbottle", "ertlewat"))