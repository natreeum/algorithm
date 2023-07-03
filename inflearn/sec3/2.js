function solution(string) {
  let f = 0;
  let b = string.length - 1;
  const alpha = /[a-zA-Z]/;
  while (f < b) {
    while (!alpha.test(string[f])) f++;
    while (!alpha.test(string[b])) b--;
    if (string[f].toLowerCase() !== string[b].toLowerCase()) return "NO";
    f++;
    b--;
  }
  return "YES";
}

console.time("solution");
const string = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(string));
console.timeEnd("solution");

// lecture code
/*
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
*/
