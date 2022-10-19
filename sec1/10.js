function solution(str, char) {
  let result = 0;
  for (let i of str) {
    if (i === char) {
      result++;
    }
  }
  return result;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
