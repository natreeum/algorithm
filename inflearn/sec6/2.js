const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(s) {
  const stack = [];
  let answer = "";
  for (let i of s) {
    if (i === "(") stack.push("(");
    else if (i === ")") stack.pop();
    else if (stack.length === 0) answer += i;
  }
  return answer;
}

time("");
const string = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
const res = solution(string);
log(res);
timeEnd("");
