/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const result = [];
    const temp = [...nums];

    temp.sort((a, b) => a - b);

    for (let i = 0; i < temp.length; i++) {
        let j = 0;
        while (nums[i] !== temp[j]) {
            j++;

        }

        result.push(j++);
    }
    return result;
};