function solution(s, times) {
  var answer = [1, 1];
  const baseDate = s.split(':').map((e) => Number(e));
  // YYYY:MM:DD:HH:mm:ss => [YYYY,MM,DD,HH,mm,SS]
  // idx : year = 0, month = 1, day = 2, hour = 3, minute = 4, second = 5
  let startDate = s.split(':').map((e) => Number(e));
  let depositDate;

  for (let i of times) {
    // DD:HH:mm:SS => [DD,HH,mm,SS]
    // id : day = 0, hour = 1, minute = 2, second = 3
    const depositTime = i.split(':').map((e) => Number(e));
    depositDate = [
      startDate[0],
      startDate[1],
      startDate[2] + depositTime[0],
      startDate[3] + depositTime[1],
      startDate[4] + depositTime[2],
      startDate[5] + depositTime[3],
    ];
    if (depositDate[5] > 59) {
      depositDate[4] += Math.floor(depositDate[5] / 60);
      depositDate[5] %= 60;
    }
    if (depositDate[4] > 59) {
      depositDate[3] += Math.floor(depositDate[4] / 60);
      depositDate[4] %= 60;
    }
    if (depositDate[3] > 23) {
      depositDate[2] += Math.floor(depositDate[3] / 24);
      depositDate[3] %= 24;
    }
    if (depositDate[2] > 30) {
      depositDate[1] += Math.floor(depositDate[2] / 30);
      depositDate[2] %= 30;
    }
    console.log(depositDate);
    if (
      !(startDate[2] + 1 === depositDate[2] || startDate[2] === depositDate[2])
    ) {
      answer[0] = 0;
    }
    startDate = [...depositDate];
  }
  answer[1] = depositDate[2] - baseDate[2] + 1;

  return answer;
}

console.log(
  solution('2021:04:12:16:08:35', ['01:06:30:00', '01:01:12:00', '00:00:09:25'])
);
