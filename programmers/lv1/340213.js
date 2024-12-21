function solution(video_len, pos, op_start, op_end, commands) {
  function prev() {
    const newPos = posSec - 10;
    if (newPos < 0) return 0;
    if (opStartSec <= newPos && newPos <= opEndSec) {
      return opEndSec;
    }
    return newPos;
  }
  function next() {
    const newPos = posSec + 10;
    if (newPos > videoLenSec) return videoLenSec;
    if (opStartSec <= newPos && newPos <= opEndSec) {
      return opEndSec;
    }
    return newPos;
  }

  function initPos() {
    const newPos = parseSec(pos);
    if (opStartSec <= newPos && newPos <= opEndSec) {
      return opEndSec;
    }
    return newPos;
  }

  function parseSec(str) {
    const [min, sec] = str.split(":");
    const minToSec = Number(min) * 60;
    const secNum = Number(sec);

    return minToSec + secNum;
  }

  function formatSec(sec) {
    const minNum = Math.floor(sec / 60);
    const secNum = sec % 60;
    return `${minNum < 10 ? `0${minNum}` : minNum}:${
      secNum < 10 ? `0${secNum}` : secNum
    }`;
  }

  const videoLenSec = parseSec(video_len);
  const opStartSec = parseSec(op_start);
  const opEndSec = parseSec(op_end);

  let posSec = initPos();

  for (let c of commands) {
    switch (c) {
      case "next":
        posSec = next();
        break;
      case "prev":
        posSec = prev();
        break;
    }
  }

  var answer = formatSec(posSec);
  return answer;
}

const case1 = ["34:33", "13:00", "00:55", "02:55", ["next", "prev"]];
const case2 = ["10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]];
const case3 = ["07:22", "04:05", "00:15", "04:07", ["next"]];

console.log(solution(case1[0], case1[1], case1[2], case1[3], case1[4]));
console.log(solution(case2[0], case2[1], case2[2], case2[3], case2[4]));
console.log(solution(case3[0], case3[1], case3[2], case3[3], case3[4]));
