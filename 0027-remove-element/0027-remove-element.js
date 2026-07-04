/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let lv=0;
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            [nums[i],nums[lv]]=[nums[lv],nums[i]]
            lv++
            count++
        }
    }
    console.log(nums)
    return count++;
};