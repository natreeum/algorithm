const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(e, p) {
  for (let i of p) {
    const queue = e.split("");
    for (let j of i) {
      if (j === queue[0]) queue.shift();
    }
    if (queue.length !== 0) log("NO");
    else log("YES");
  }
}

time("");
const essentials = "CBA";
const plan = ["CBDAGE", "CGEADB"];
solution(essentials, plan);
timeEnd("");
