var repeatedSubstringPattern = function(s) {

    for(let len = 1; len <= s.length / 2; len++) {

        // substring length must divide full length
        if(s.length % len !== 0) continue;

        let pattern = s.slice(0, len);

        let repeated = pattern.repeat(s.length / len);

        if(repeated === s) return true;
    }

    return false;
};