// two pointer algorithm
function solution(arr1, arr2) {
  let idx1 = 0;
  let idx2 = 0;
  const answer = [];

  const lengthSum = arr1.length + arr2.length;
  while (idx1 + idx2 <= lengthSum - 2) {
    if (arr1[idx1] === undefined) {
      answer.push(arr2[idx2]);
      idx2++;
      continue;
    } else if (arr2[idx2] === undefined) {
      answer.push(arr1[idx1]);
      idx1++;
      continue;
    }
    if (arr1[idx1] < arr2[idx2]) {
      answer.push(arr1[idx1]);
      idx1++;
    } else {
      answer.push(arr2[idx2]);
      idx2++;
    }
  }
  return answer;
}

console.time("solution");
const arr1 = [1, 3, 5, 16, 17, 178];
const arr2 = [2, 3, 6, 7, 9, 10, 12, 13, 14, 15];
console.log(solution(arr1, arr2));
console.timeEnd("solution");

// lecture code
function solution(arr1, arr2) {
  const answer = [];
  const n = arr1.length;
  const m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}
