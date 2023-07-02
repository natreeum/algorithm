function solution(n, k) {
  const answer = [];
  const nums = [];
  let idx = k - 1;
  for (let i = 0; i < n; i++) nums.push(i + 1);
  while (nums.length !== 0) {
    answer.push(nums.splice(idx, 1)[0]);
    idx = (idx + k - 1) % nums.length;
  }
  console.log(answer);
}
console.time("solution");
solution(10, 5);
console.timeEnd("solution");
