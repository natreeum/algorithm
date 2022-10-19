function solution(a, b, c) {
  let result = a;
  if (a > b) result = b;
  if (result > c) result = c;
  return result;
}

solution(1, 2, 3);
