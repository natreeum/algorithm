function solution(num, arr) {
  const result = [];
  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

console.log(solution(5, [`good`, `time`, `good`, `time`, `student`]));
