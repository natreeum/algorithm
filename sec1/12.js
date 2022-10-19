function solution(str) {
  let result = '';
  for (let i of str) {
    result += i.toUpperCase();
  }
  return result;
}

console.log(solution(`ItIsTimeToStudy`));
