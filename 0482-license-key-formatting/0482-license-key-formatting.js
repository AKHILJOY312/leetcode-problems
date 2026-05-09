/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  let temp = s.split("-").join("").toUpperCase();
  let res="";
  let count=0;
  for(let i= temp.length-1;i>=0;i--){
res += temp[i];
count++;
if(count=== k && i != 0){
    res+= "-";
    count=0;
}
  }

    return res.split("").reverse().join("");
};