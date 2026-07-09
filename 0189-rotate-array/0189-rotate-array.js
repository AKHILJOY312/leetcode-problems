/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;
    function swap(l, r) {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++;
            r--;
        }
    }

       // Reverse entire array
    swap(0, nums.length - 1);

    // Reverse first k elements
    swap(0, k - 1);

    // Reverse remaining elements
    swap(k, nums.length - 1);
};