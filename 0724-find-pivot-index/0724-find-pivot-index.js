/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const len = nums.length;

    const sumLeft = Array(len).fill(0);
    sumLeft[0] = nums[0]
    for (let i = 1; i < len; i++) {
        sumLeft[i] = sumLeft[i - 1] + nums[i]
    }

    const sumRight = Array(len).fill(0);
    sumRight[len - 1] = nums[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        sumRight[i] = sumRight[i + 1] + nums[i]
    }

    for (let i = 0; i < len; i++) {
        leftSum = sumLeft[i] - nums[i]
        rightSum = sumRight[i] - nums[i]
        if (leftSum == rightSum) {
            return i;
        }
    }

    return -1
};