const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(n, k) {
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  let cnt = 0;
  while (queue.length !== 1) {
    cnt++;
    if (cnt === k) {
      queue.shift();
      cnt = 0;
    } else {
      queue.push(queue.shift());
    }
  }
  return queue[0];
}

time("");
const n = 8;
const k = 3;
const res = solution(n, k);
log(res);
timeEnd("");
