const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(b) {
  const stack = [];
  for (let i of b) {
    if (i === "(") stack.push(i);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length !== 0) return "NO";
  return "YES";
}

time("");
const brackets = "()))))";
const b = "()()(())()())";
const res = solution(b);
log(res);
timeEnd("");
