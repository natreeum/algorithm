function solution(str) {
  let midNum = 0;
  if (str.length % 2 === 1) {
    midNum = Math.floor(str.length / 2);
    return str[midNum];
  } else {
    midNum = str.length / 2;
    return str[midNum - 1] + str[midNum];
  }
}

console.log(solution('study'));
console.log(solution('good'));
