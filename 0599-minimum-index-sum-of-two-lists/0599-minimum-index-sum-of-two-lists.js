/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let result = [];
    let minSum = Infinity;
    for (let i = 0; i < list1.length; i++) {
        let j = list2.indexOf(list1[i]);

        if (j !== -1) {
            let sum = i + j;

            if (sum < minSum) {
                minSum = sum;
                result = [list1[i]];
            } else if (sum === minSum) {
                result.push(list1[i]);
            }
        }
    }
    return result;
};