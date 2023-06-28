function minimumAbsDifference(nums) {
  const n = nums.length / 2;

 // find the sum of all elements in the set
  const sum = nums.reduce((acc, num) => acc + num, 0);

  // Create a 2D DP array with dimensions (n + 1) x (sum + 1)
  const dp = new Array(n + 1).fill(null).map(() => new Array(sum + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i < nums.length; i++) {
    for (let j = n; j >= 1; j--) {
      for (let k = sum; k >= nums[i]; k--) {
        dp[j][k] = dp[j][k] || dp[j - 1][k - nums[i]];
      }
    }
  }

// If there exists a subset of size n with sum k, update minDiff and break out of the loop
  let minDiff = Infinity;
  for (let k = sum / 2; k >= 0; k--) {
    if (dp[n][k]) {
      minDiff = sum - 2 * k;
      break;
    }
  }

  return minDiff;
}

// Testing the function with the provided examples
console.log(minimumAbsDifference([3, 9, 7, 3])); // Output: 2
console.log(minimumAbsDifference([2, -1, 0, 4, -2, 9])); // Output: 0





