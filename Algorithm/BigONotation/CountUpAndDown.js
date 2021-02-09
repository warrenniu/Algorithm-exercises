function countUpAndDown(n) {
    console.log("Going up!");
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top! Going down")
    for (var j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down")
}

// In the above example, the first for loop is O(n) while the second is also O(n). Therefore, this function is still O(n).