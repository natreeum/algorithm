function solution(a, b, c) {
  //logic
  let min = a;
  if (min > b) min = b;
  if (min > c) min = c;

  return min;
}

console.log(solution(6, 5, 11));
