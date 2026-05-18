/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let temp = [...score];
    //Keep the original index of each score.
    const map = new Map();
    for (let i = 0; i < score.length; i++) {
        map.set(score[i], i);
    }
    //Sort scores in descending order.
    temp.sort((a, b) => b - a);
    //Assign ranks based on position.
    for (let i = 0; i < temp.length; i++) {
        if (i == 0) {
            score[map.get(temp[i])] = "Gold Medal"
        }
        else if (i == 1) {
            score[map.get(temp[i])] = "Silver Medal"
        }
        else if (i == 2) {
            score[map.get(temp[i])] = "Bronze Medal"
        } else {
            score[map.get(temp[i])] = (i+1).toString()

        }

    }
    //Put the rank back into the correct original index.

    return score;
};