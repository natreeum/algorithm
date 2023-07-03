function solution(string) {
  let char;
  let answer = "";
  let cnt = 1;
  for (let i of string) {
    if (char != i) {
      if (cnt != 1) answer += cnt;
      answer += i;
      cnt = 1;
    } else cnt++;
    char = i;
  }
  return answer;
}

console.time("solution");
const str = "KKHSSSSSSSE";
console.log(solution(str));
console.timeEnd("solution");

// lecture code
/*
function solution(s) {
  let cnt = 1;
  let answer = "";
  s += " ";
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += `${s[i]}${cnt === 1 ? "" : cnt}`;
      cnt = 1;
    }
  }
  return answer;
}
*/
