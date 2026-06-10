var dominantIndex = function(nums) {
    let largest = -1;
    let secondLargest = -1;
    let index = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            index = i;
        } else if (nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }

    return largest >= 2 * secondLargest ? index : -1;
};