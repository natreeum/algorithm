function solution(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let num;
  for (let i of arr) {
    let sum = i
      .toString()
      .split("")
      .reduce((prev, cur) => prev + Number(cur), 0);
    if (sum > max) {
      num = i;
      max = sum;
    } else if (sum === max) {
      num = num < i ? i : num;
    }
  }
  return num;
}

console.time("solution");
const nums = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(nums));
console.timeEnd("solution");
