function solution(num, arr) {
  let cnt = 0;
  for (let i of arr) {
    if (i % 10 === num) {
      cnt++;
    }
  }
  return cnt;
}

console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
