function solution(n) {
  let i = 1;
  while (true) {
    if (i * 12 > n) break;
    i++;
  }
  return i;
}

console.log(solution(178));
