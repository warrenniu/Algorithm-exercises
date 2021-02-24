class Solution {
    solve(s) {
        let newString = ""
        s += '-'

        for (let i = 1; i < s.length; i++) {
            const nextItem = s[i]
            const item = s[i - 1]
            if (item != nextItem) {
                newString += item
            }
        }
        return newString
    }
}
