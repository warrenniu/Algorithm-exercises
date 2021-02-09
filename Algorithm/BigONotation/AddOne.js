function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6))

// In this example, the number of operations is (eventually) bounded by a multiple of n (say, 10n). Therefore, it is O(n)