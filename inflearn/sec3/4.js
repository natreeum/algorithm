function solution(string, t) {
  const answer = [];
  let idx = 0;
  const tIdxs = [];
  while (idx < string.length) {
    if (string[idx] === t) tIdxs.push(idx);
    idx++;
  }
  idx = 0;
  while (idx < string.length) {
    let min = Number.MAX_SAFE_INTEGER;
    tIdxs.forEach((e) => {
      const diff = Math.abs(e - idx);
      if (diff < min) min = diff;
    });
    answer.push(min);
    idx++;
  }
  return answer;
}

// lecture code
/*
function solution(string, t) {
  const answer = [];
  let p = Number.MAX_SAFE_INTEGER;
  for (let i of string) {
    if (i === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = Number.MAX_SAFE_INTEGER;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}
*/

console.time("solution");
const str = "teachermode";
const t = "e";
console.log(solution(str, t));
console.timeEnd("solution");
