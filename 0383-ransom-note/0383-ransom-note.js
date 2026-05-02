/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    // Step 1: Store magazine letter counts
    const count = {};

    for (let char of magazine) {
        count[char] = (count[char] || 0) + 1;
    }

    // Step 2: Use letters for ransomNote
    for (let char of ransomNote) {
        if (!count[char]) {
            return false;

        }
        count[char]--;
    }
    return true;
};