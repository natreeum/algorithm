// sliding window
function solution(k, arr) {
  let idx1 = 0;
  let idx2 = idx1 + k;
  let max = Number.MIN_SAFE_INTEGER;
  while (idx2 < arr.length) {
    let sum = 0;
    for (let i = idx1; i < idx2; i++) sum += arr[i];
    max = Math.max(sum, max);
    idx1++;
    idx2++;
  }

  return max;
}

// lecture code
function Lsolution(k, arr) {
  let sum = 0;
  let answer;
  // 맨 처음 k 개의 합
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

console.time("");
const k = 3;
const sales = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
const res = solution(k, sales);
console.log(res);
console.timeEnd("");
