function solution(string) {
  for (let q of string) {
    const opndBracket = [];
    let flag = true;
    for (let b of q) {
      if (b === "(") {
        opndBracket.push(b);
      } else {
        if (opndBracket.pop() !== "(") {
          flag = false;
          break;
        }
      }
    }
    if (flag && opndBracket.length == 0) console.log("YES");
    else console.log("NO");
  }
}

console.time("solution");
// const strings = [
//   "(())())",
//   "(((()())()",
//   "(()())((()))",
//   "((()()(()))(((())))()",
//   "()()()()(()()())()",
//   "(()((())()(",
// ];
const strings = ["((", "))", "())(()"];
solution(strings);
console.timeEnd("solution");
