/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    const bannedSet = new Set(banned);
    const paraClean = paragraph.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, " ").split(" ").filter((x) => x && !bannedSet.has(x));
  
    const freq = {};
    for (let i = 0; i < paraClean.length; i++) {
        freq[paraClean[i]] = (freq[paraClean[i]] || 0) + 1;
    }
    let maxNum = 0;
    let maxWord = ''
    for (let ele in freq) {
        if (maxNum < freq[ele]) {
            maxNum = freq[ele];
            maxWord = ele;
        }
    }
    console.log(freq)
    return maxWord;
};