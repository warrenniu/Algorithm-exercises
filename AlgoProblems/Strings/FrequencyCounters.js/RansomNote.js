//===============================================================================
// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.
//===============================================================================

//Constraints
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


//Steps
//1. Initialize magazineHash variable and set it to empty hash. Freq counter for magazine
//2. Initialize ransomHash variable and set it to empty hash. Freq counter for ransomNote
//3. Loop through both strings -> populate both hashes
//4. Loop through ransomHash -> check if value exists in magazine. If it does, decrement that value from magazineHash. If it does not, return false
//5. Return true at end of function

function canConstruct(ransomNote, magazine) {
    const magazineHash = {};
    const ransomHash = {};

    for (let i = 0; i < magazine.length; i++) {
        magazineHash[magazine[i]] = magazineHash[magazine[i]] ? magazineHash[magazine[i]] += 1 : magazineHash[magazine[i]] = 1
    };

    for (let i = 0; i < ransomNote.length; i++) {
        ransomHash[ransomNote[i]] = ransomHash[ransomNote[i]] ? ransomHash[ransomNote[i]] += 1 : ransomHash[ransomNote[i]] = 1
    };

    for (key in ransomHash) {
        if (ransomHash[key] <= magazineHash[key]) {
            continue
        } else {
            return false
        }
    }
    return true;

}

console.log(canConstruct("aa", "aab"))

