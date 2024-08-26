// src/utils/unroll.js
function unroll(square) {
    let result = [];
    while (square.length) {
      result = result.concat(square.shift());
      square.forEach(row => result.push(row.pop()));
      square.reverse().map(row => row.reverse());
    }
    return result;
  }
  
  export default unroll;
  