function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// In the above example, we have a nested loop, where each input (n) will double based on what was inputted, or O(n) operation inside of an O(n) operation. Therefore, this function is a quadratic O(n^2).