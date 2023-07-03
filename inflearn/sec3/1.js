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

// lecture code
/*
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str = "goooG";
console.log(solution(str));
*/
