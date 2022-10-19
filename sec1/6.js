function solution(arr) {
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i of arr) {
    if (i % 2 === 1) {
      sum += i;
      if (min > i) min = i;
    }
  }
  console.log(sum);
  console.log(min);
}

solution([12, 77, 38, 41, 53, 92, 85]);
