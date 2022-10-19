function solution(arr) {
  let idx1 = 0;
  let idx2 = 0;
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = 0;
      for (let k = 0; k < arr.length; k++) {
        if (k !== i && k !== j) {
          sum += arr[k];
        }
      }
      if (sum === 100) {
        idx1 = i;
        idx2 = j;
      }
    }
  }
  for (let i of arr) {
    if (arr.indexOf(i) !== idx1 && arr.indexOf(i) !== idx2) {
      result.push(i);
    }
  }
  return result;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
