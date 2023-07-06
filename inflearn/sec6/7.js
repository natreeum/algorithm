const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(e, p) {
  for (let i of p) {
    let f = true;
    const arr = e.split("");
    for (let j of i) {
      if (arr.includes(j)) {
        if (arr[0] !== j) {
          f = false;
          break;
        } else arr.shift();
      }
    }
    if (f) log("YES");
    else log("NO");
  }
}

time("");
const essentials = "CBA";
const plan = ["CBDAGE", "CGEADB"];
solution(essentials, plan);
timeEnd("");
