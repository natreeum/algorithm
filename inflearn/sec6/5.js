const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(s) {
  const stack = [];
  let last;
  let answer = 0;
  for (let i of s) {
    if (i === "(") stack.push(i);
    else {
      // () 일 경우
      if (last != i) {
        stack.pop();
        answer += stack.length;
      }
      // )) 일 경우
      else {
        stack.pop();
        answer++;
      }
    }
    last = i;
  }
  return answer;
}

time("");
const i1 = "()(((()())(())()))(())";
const i2 = "(((()(()()))(())()))(()())";
log(solution(i1));
log(solution(i2));
timeEnd("");
