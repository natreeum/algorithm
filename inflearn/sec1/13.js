function solution(str) {
  let result = '';
  for (let i of str) {
    if (i.toUpperCase() === i) {
      result += i.toLowerCase();
    } else {
      result += i.toUpperCase();
    }
  }
  return result;
}

console.log(solution('StuDY'));
