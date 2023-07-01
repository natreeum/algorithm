// function solution(arr) {
//   const n = arr.length;
//   let rightDownSum = 0;
//   let rightUpSum = 0;
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     rightDownSum += arr[i][i];
//     rightUpSum += arr[i][n - i - 1];
//   }
//   for (let i = 0; i < n; i++) {
//     let rawSum = 0;
//     let columnSum = 0;
//     for (let j = 0; j < n; j++) {
//       rawSum += arr[i][j];
//       columnSum += arr[j][i];
//     }
//     const tmp = Math.max(rawSum, columnSum, rightDownSum, rightUpSum);
//     if (answer < tmp) answer = tmp;
//   }
//   return answer;
// }

// const board = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];
// console.log(solution(board));

// lecture code
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = 0,
    sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 = 0;
    sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

const board = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(board));
