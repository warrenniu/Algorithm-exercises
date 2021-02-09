function logAtLeast5(n) {
	for (var i = 1; i <= Math.max(5, n); i++) {
		console.log(i)
}
}
// In this example, we do not need to worry about the 5, and focus on the input of n. Therefore, this function is O(n)