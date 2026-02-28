/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    function backTrack(remain, comb, start) {
        if (remain === 0) {
            result.push([...comb]);
            return;
        }
        else if (remain < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            comb.push(candidates[i]);
            backTrack(remain - candidates[i], comb, i);
            comb.pop();
        }

    }

    backTrack(target, [], 0);
    return result;
};