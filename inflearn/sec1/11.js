function solution(str) {
  let result = 0;
  for (let i of str) {
    if (i.toLowerCase() !== i) result++;
  }
  return result;
}

console.log(solution('KoreanTimeGOOD'));
