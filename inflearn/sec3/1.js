function solution(string) {
  const length = string.length;
  for (let i = 0; i < length / 2; i++) {
    if (string[i].toLowerCase() != string[length - i - 1].toLowerCase()) {
      return "NO";
    }
  }
  return "YES";
}

console.time("solution");
const str = "gooG";
console.log(solution(str));
console.timeEnd("solution");
