function solution(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  if (max < a + b + c - max) return 'YES';
  else return 'NO';
}

console.log(solution(13, 33, 17));
