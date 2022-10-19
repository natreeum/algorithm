function solution(str) {
  let result = '';
  for (let i of str) {
    if (i === 'A') result += '#';
    else result += i;
  }
  return result;
}

console.log(solution('BANANA'));
