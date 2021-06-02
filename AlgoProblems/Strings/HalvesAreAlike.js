//===============================================================================
//You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.
//===============================================================================

//Constraints
// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.


//Steps
//1. Use substring to cut s in half. Set first half to a & set second half to b
//2. Instantiate an array that contains all the vowels (both uppercase and lowercase)
//3. Instantiate two variables, halfA and halfB, and set them equal to 0
//4. Set up two for loops, iterating over a & b, respectievly. Freq counter -> put in a hash
//5. Loop over the keys of both objects. If vowel, increment halfA and halfB by the value of the vowel key
//6. Set conditional -> if halfA === halfB, return true. Else, return false

function halvesAreAlike(s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let halfA = 0;
    let halfB = 0;
    const freqCounterA = {};
    const freqCounterB = {};

    const substringA = s.substring(0, s.length / 2)
    const substringB = s.substring(s.length / 2, s.length) 
    console.log(substringA,substringB)

    for (let i = 0; i < substringA.length; i++) {
        freqCounterA[substringA[i]] = freqCounterA[substringA[i]] ? freqCounterA[substringA[i]] += 1 : freqCounterA[substringA[i]] = 1
    }

    for (let i = 0; i < substringB.length; i++) {
        freqCounterB[substringB[i]] = freqCounterB[substringB[i]] ? freqCounterB[substringB[i]] += 1 : freqCounterB[substringB[i]] = 1
    }
    console.log("A",freqCounterA, "B", freqCounterB)

    for (key in freqCounterA) {
        for (let i = 0; i < vowels.length; i++) {
            if (key === vowels[i]) {
                halfA += freqCounterA[key]
            }
        }
    }

    for (key in freqCounterB) {
        for (let i = 0; i < vowels.length; i++) {
            if (key === vowels[i]) {
                halfB += freqCounterB[key]
            }
        }
    }
    return halfA === halfB ? true : false
}

console.log(halvesAreAlike("book"))

