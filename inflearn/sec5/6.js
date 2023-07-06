// Hash map
function solution(voteRes) {
  const candidates = ["A", "B", "C", "D", "E"];
  const res = Array.from({ length: candidates.length }, (v, k) => k + 1);
  const voteResArr = voteRes.split("");
  for (let i of voteResArr) {
    res[candidates.indexOf(i)]++;
  }
  const idx = res.indexOf(Math.max(...res));
  return candidates[idx];
}

// Lecture code
function Lsolution(voteRes) {
  const votes = new Map();
  for (let i of voteRes) {
    if (votes.has(i)) votes.set(i, votes.get(i) + 1);
    else votes.set(i, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  let answer;
  for (let [key, val] of votes) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.time("");
const voteRes = "BACBACCACCBDEDE";
const res = solution(voteRes);
console.log(res);
console.timeEnd("");
