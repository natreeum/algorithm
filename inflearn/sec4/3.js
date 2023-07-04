function solution(n, m, scores) {
  const pairs = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      let flag = true;
      for (let k = 0; k < m; k++) {
        if (scores[k].indexOf(i + 1) > scores[k].indexOf(j + 1)) {
          flag = false;
          break;
        }
      }
      if (flag) pairs.push([i, j]);
    }
  }
  return pairs.length;
}

console.time("solution");
const scores = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
const n = 4;
const m = 3;
console.log(solution(scores));
console.timeEnd("solution");

// lecture code
/*
function solution(test) {
  let answer = 0;
  let m = test.length;
  let n = test[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0,
          pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}
*/
