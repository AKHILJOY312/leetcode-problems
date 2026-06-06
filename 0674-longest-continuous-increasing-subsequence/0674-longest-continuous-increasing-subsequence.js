function findLengthOfLCIS(nums){
    if (nums.length === 0) return 0;

    let max = 1;
    let count = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            count++;
        } else {
            count = 1;
        }

        max = Math.max(max, count);
    }

    return max;
}