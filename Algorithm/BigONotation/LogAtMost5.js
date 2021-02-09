function LogAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

// In the above example, n will grow only up until n, before it becomes a constant once it reaches 5. Therefore, this function is O(1)