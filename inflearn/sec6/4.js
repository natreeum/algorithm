const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(e) {
  const stack = [];
  for (let i of e) {
    if (!isNaN(i)) stack.push(Number(i));
    else {
      let a, b;
      b = stack.pop();
      a = stack.pop();
      if (i === "+") {
        stack.push(a + b);
      } else if (i === "-") {
        stack.push(a - b);
      } else if (i === "*") {
        stack.push(a * b);
      } else if (i === "/") {
        stack.push(a / b);
      }
    }
  }
  return stack[0];
}

time("");
const e1 = "352+*9-"; //12
const e2 = "472+*"; // 36
const e3 = "324*+93/-"; // 8
log(solution(e1));
log(solution(e2));
log(solution(e3));
timeEnd("");
