/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    //make a freqency map
    const freqMap = {};
    for (let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    let maxCount = 0

    //find the pair with max number
    for (let [num, count] of Object.entries(freqMap)) {
        let currentNumber = Number(num);

        if (freqMap[currentNumber + 1]) {

            maxCount = Math.max(maxCount, count + freqMap[currentNumber + 1])
        }
    }
    return maxCount;
};