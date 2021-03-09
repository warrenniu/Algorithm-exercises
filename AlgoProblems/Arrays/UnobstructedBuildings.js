class Solution {
    solve(heights) {
        let views = []
        let greatestHeight = 0
        // views.push(heights[heights.length])

        for (let i = heights.length -1; i >= 0; i--){
            if (heights[i] > greatestHeight) {
                views.unshift(i)
                greatestHeight = heights[i]
            }
        }
        return views
    }
}