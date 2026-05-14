/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    //1:Handle edge case
    if (numRows === 1 || numRows >= s.length) { return s }

    //2:Create Row
    const row = new Array(numRows).fill("");

    //3:Track current Row
    let currentRow = 0;
    let goingDown = false;

    //4:Traversel each character
    for(let char of s){
        row[currentRow]+=char;

        if(currentRow==0 || currentRow==numRows-1 ){
            goingDown= !goingDown;
        }

        currentRow+=goingDown?1:-1;
    }

    //5:Build final string
    return row.join("")
};