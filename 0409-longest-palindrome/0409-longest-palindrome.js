var longestPalindrome = function(s) {
    const map = new Map();

    // count frequency
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (let count of map.values()) {
        if (count % 2 === 0) {
            length += count; // use all
        } else {
            length += count - 1; // use even part
            hasOdd = true;
        }
    }

    return hasOdd ? length + 1 : length;
};