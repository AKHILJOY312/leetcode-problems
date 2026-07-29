/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    //create ap array with the length of the given array and fill it with false
    const dp = new Array(nums.length).fill(false);

    //initialize the first element of dp to true
    dp[0] = true;

    //Create a loop that runs the with the length of the give array
    for (let i = 0; i < nums.length; i++) {
        //If the current element is false then contine to the next loop
        if (!dp[i]) continue;

        //Create a loop for the maximum jump for current index
        for (let jump = 1; jump <= nums[i]; jump++) {
            //If the the jump from the currect index is less, than keep the dp array true
            if (i + jump < nums.length) {
                dp[jump + i] = true;
            }
        }
    }
    //return the last index element in the dp
    return dp[nums.length - 1]
};