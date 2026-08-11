/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    let jumps=0;
    let currentEnd=0;
    let farthest=0;

    for(let i=0;i<nums.length-1;i++){
        farthest=Math.max(farthest,i+nums[i])
        console.log("farthest:",farthest)
         console.log("jumps:",jumps)
          console.log("currentEnd:",currentEnd)
           console.log("_________")

        if(i===currentEnd){
            jumps++;
            currentEnd= farthest;
        }
    }
    return jumps;
};