/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    //create an array with the same length as nums and fill it with -1
    const dp = new Array(nums.length).fill(-1);

    function minJump(index) {
        //check wheter i have reachde the index or passed the index
        if (index >= nums.length - 1) {
            return 0;
        }

        //if the value at dp intex is not -1 then return it
        if (dp[index] !== -1) {
            return dp[index];
        }

        let min = Infinity;
        //Try all the possible jumps
        for (let jump = 1; jump <= nums[index]; jump++) {
            //make the jumps from here to the spefied possbils location
            const jumps = minJump(index + jump);
            //keep track on the minumum
            min = Math.min(jumps, min)
        }
        dp[index]=1+min;
        return dp[index]
    }

    //run the function
    return minJump(0)
};