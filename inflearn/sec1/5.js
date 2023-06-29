function solution(arr) {
  let result = arr[0];
  for (let i of arr) {
    if (result > i) {
      result = i;
    }
  }
  return result;
}
console.log(solution([4, 2, 5, 16, 17, 22, 45]));
