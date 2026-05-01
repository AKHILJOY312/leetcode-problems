/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    //algo
    //take the last elemst add them if cary store it and use it
    //contuius till the end
    //

    let i = num1.length - 1;
    let j = num2.length - 1;

    let result = "";
    let carry = 0;
    //get the last 
  while (i >= 0 || j >= 0 || carry) {
        // get current digit from right side
        let last1 = i >= 0 ? num1[i] - "0" : 0;
        let last2 = j >= 0 ? num2[j] - "0" : 0;

        let sum = last1 + last2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;

        i--;
        j--;    }


    return result;
};