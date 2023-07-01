function solution(scores) {
  const result = new Array(scores.length).fill(0);
  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (i == j) continue;
      if (scores[i] >= scores[j]) result[i]++;
    }
  }
  return result.map((e) => scores.length - e);
}

console.log(solution([1, 2, 2, 2, 3]));

// function solution(scores) {
//   const answer = new Array(scores.length).fill(1);
//   const cnt = scores.length;
//   for (let i = 0; i < cnt; i++) {
//     for (let j = 0; j < cnt; j++) {
//       if (scores[i] < scores[j]) answer[i]++;
//     }
//   }
//   return answer;
// }
// console.log(solution([87, 89, 92, 100, 76]));
