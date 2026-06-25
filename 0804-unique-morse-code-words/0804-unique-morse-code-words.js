/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    const set = new Set();

    for (let word of words) {
        code = "";

        for (let char of word) {
            code += morse[char.charCodeAt(0) - 97]
        }
        set.add(code);
    }
    return set.size;
};