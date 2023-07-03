function solution(string) {
  let answer = "";
  const nums = /[0-9]/;
  for (let i of string) {
    if (nums.test(i)) answer += i;
  }
  return Number(answer);
}

console.time("solution");
const string = "tge0a1h205er";
const string2 = "g0en2T0s8eSoft";
console.log(solution(string2));
console.timeEnd("solution");

// lecture code
/*
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
*/
