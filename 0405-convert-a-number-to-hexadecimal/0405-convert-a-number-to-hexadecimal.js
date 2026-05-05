/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num===0)return "0";
    return (num>>>0).toString(16);
};