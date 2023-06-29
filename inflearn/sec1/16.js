function solution(str) {
  let resultArr = [];
  let result = '';
  for (let i of str) {
    if (!resultArr.includes(i)) {
      resultArr.push(i);
      result += i;
    }
  }
  return result;
}

console.log(solution(`ksekkset`));
