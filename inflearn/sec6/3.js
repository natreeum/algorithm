const time = console.time;
const timeEnd = console.timeEnd;
const log = console.log;

function solution(b, m) {
  const stack = [];
  let answer = 0;
  const n = b.length;
  function pushToStack(num) {
    const last = stack[stack.length - 1];
    if (last === num) {
      stack.pop();
      answer += 2;
    } else stack.push(num);
  }
  for (let i of m) {
    const idx = i - 1;
    let height = 0;
    while (height < n) {
      if (b[height][idx] !== 0) {
        pushToStack(b[height][idx]);
        b[height][idx] = 0;
        break;
      }
      height++;
    }
  }
  return answer;
}

time("");
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
const res = solution(board, moves);
log(res);
timeEnd("");
