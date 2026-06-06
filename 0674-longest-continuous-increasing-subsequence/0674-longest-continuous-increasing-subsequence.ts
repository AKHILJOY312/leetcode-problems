function findLengthOfLCIS(nums: number[]): number {
    //itertate throug all the elements
    //count the max till the lowerest or end 
    //reset the max if the next set count is high that the max;
    let max = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            count++;
        } else {
            //reset

            count = 1;

        }
        max = Math.max(count, max);
    }
    return max;
};