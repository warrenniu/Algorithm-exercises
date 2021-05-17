

// function rotateString(A,B) {
//     let Aarray = A.split("")
//     const ALength = Aarray.length

//     //edge case if both inputs were empty
//     if (A === "" && B === "") {
//         return true
//     }

//     for (let i = 0; i < ALength; i++) {
//         let char = Aarray.pop()
//         Aarray.unshift(char)

//         if (Aarray.join("") === B) {
//             return true
//         }
//     }
//     return false
// }




function rotateString(A,B) {
    let newString = A.concat(A)
    return newString.includes(B)  
}



console.log(rotateString("waterbottle", "erbtlewat"))