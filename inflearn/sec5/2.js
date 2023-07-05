// function solution(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   let idx1 = 0;
//   let idx2 = 0;
//   const answer = [];
//   while (idx1 + idx2 <= arr1.length + arr2.length - 2) {
//     if (arr1[idx1] < arr2[idx2]) idx1++;
//     else if (arr1[idx1] > arr2[idx2]) idx2++;
//     else {
//       answer.push(arr1[idx1]);
//       idx1++;
//       idx2++;
//     }
//   }
//   return answer;
// }

function solution(arr1, arr2) {
  const newSet = new Set();
  const answer = [];
  for (i of arr1) {
    newSet.add(i);
  }
  for (i of arr2) {
    if (newSet.has(i)) answer.push(i);
  }
  return answer.sort((a, b) => a - b);
}

console.time("solution");
const arr1 = [1, 3, 9, 5, 2, 10, 13, 15, 19];
const arr2 = [3, 2, 5, 7, 8, 1, 10, 14, 19, 17];
console.log(solution(arr1, arr2));
console.timeEnd("solution");

// lecture code
function solution(arr1, arr2) {
  const answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}
