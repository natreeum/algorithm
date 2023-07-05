function solution(m, arr) {
  let answer = 0,
    sum = 0,
    p1 = 0;
  for (let p2 = 0; p2 < arr.length; p2++) {
    sum += arr[p2];
    if (sum <= m) answer += p2 - p1 + 1;
    while (sum > m) {
      sum -= arr[p1++];
      if (sum <= m) answer += p2 - p1 + 1;
    }
  }
  return answer;
}

// lecture code
function solution(m, arr) {
  let answer = 0,
    sum = 0,
    p1 = 0;
  for (let p2 = 0; p2 < arr.length; p2++) {
    sum += arr[p2];
    while (sum > m) sum -= arr[p1++];
    answer += p2 - p1 + 1;
  }
  return answer;
}

console.time("solution");
const m = 5;
const arr = [1, 3, 1, 2, 3];
console.log(solution(m, arr));
console.timeEnd("solution");
