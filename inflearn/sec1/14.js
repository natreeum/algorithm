function solution(num, arr) {
  let maxLength = 0;
  let result = '';
  for (let i of arr) {
    if (i.length > maxLength) {
      maxLength = i.length;
      result = i;
    }
  }
  return result;
}

console.log(solution(5, [`teacher`, `time`, `student`, `beautiful`, `good`]));
