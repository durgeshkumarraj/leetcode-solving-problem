/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function(nums) {
    let n = nums.length;
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);
    let dp = [];
    dp.push(nums[0]);
    
    // Binary search helper function
    function binarySearch(arr, target) {
        let l = 0;
        let r = arr.length - 1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return l;
    }

    // Compute prefix (LIS up to each index)
    for (let i = 1; i < n; i++) {
        if (dp.at(-1) < nums[i]) {
            dp.push(nums[i]);
            prefix[i] = dp.length;
        } else {
            const idx = binarySearch(dp, nums[i]);
            dp[idx] = nums[i];
            prefix[i] = idx + 1;
        }
    }

    // Reset dp and calculate suffix (LIS from each index to the end)
    dp.length = 0;
    dp.push(nums.at(-1));
    for (let i = n - 2; i >= 0; i--) {
        if (dp.at(-1) < nums[i]) {
            dp.push(nums[i]);
            suffix[i] = dp.length;
        } else {
            const idx = binarySearch(dp, nums[i]);
            dp[idx] = nums[i];
            suffix[i] = idx + 1;
        }
    }

    // Calculate minimum removals for mountain array
    let ans = n + 1;
    for (let i = 1; i < n - 1; i++) {
        if (prefix[i] !== 1 && suffix[i] !== 1) { // Valid peak
            const count = n - (prefix[i] + suffix[i] - 1);
            ans = Math.min(count, ans);
        }
    }
    
    return ans;
};