function solution(num, arr) {
  const result = [];
  result.push(arr[0]);
  for (let i = 1; i < num; i++) {
    if (arr[i] > arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(solution(6, [7, 3, 9, 5, 6, 12]));
