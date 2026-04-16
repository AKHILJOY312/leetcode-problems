var readBinaryWatch = function(turnedOn) {
    const result = [];

    const countBits = (num) => {
        let count = 0;
        while (num) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (countBits(h) + countBits(m) === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }

    return result;
};