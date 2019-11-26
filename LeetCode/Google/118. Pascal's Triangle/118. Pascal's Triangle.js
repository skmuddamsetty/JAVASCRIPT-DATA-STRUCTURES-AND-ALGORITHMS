/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  //   if (numRows === 0) return [];
  //   let results = [1];
  //   if (numRows === 1) {
  //     return results;
  //   } else if (numRows > 1) {
  //     numRows = numRows - 1;
  //     while (numRows > 0) {
  //       results.push(helper(results[results.length - 1]));
  //       numRows--;
  //     }
  //   }
  //   results[0] = [1];
  //   return results;

  //   if (numRows === 0) return [];
  let results = [1];
  if (numRows === 1) {
    return results;
  } else if (numRows > 1) {
  }
  results[0] = [1];
  return results;
};

helper = (arr = []) => {
  let results = [];
  let finalResults = [];
  for (let i = 0; i < arr.length - 1; i++) {
    results.push(arr[i] + arr[i + 1]);
  }
  if (results.length > 0) {
    finalResults.push(1);
    finalResults = finalResults.concat(results);
    finalResults.push(1);
  } else {
    if (arr.length === 1) {
      finalResults = [1, 1];
    } else {
      finalResults = [1];
    }
  }
  return finalResults;
};
console.log(generate(0));
