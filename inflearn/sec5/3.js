// function solution(m, arr) {
//   let p1 = 0;
//   let p2 = 0;
//   let answer = 0;
//   let sum = 0;
//   while (p2 < arr.length) {
//     sum += arr[p2++];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= arr[p1++];
//       if (sum === m) answer++;
//     }
//   }
//   return answer;
// }

function solution(m, arr) {
  let p1 = 0;
  let sum = 0;
  let answer = 0;
  for (let p2 = 0; p2 < arr.length; p2++) {
    sum += arr[p2];
    if (sum === m) answer++;
    if (sum >= m) {
      sum -= arr[p1++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.time("solution");
const m = 6;
const arr = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(m, arr));
console.timeEnd("solution");
