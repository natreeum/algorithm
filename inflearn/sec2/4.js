function solution(results) {
  let totScore = 0;
  let score = 1;
  for (let i of results) {
    if (i) {
      totScore += score++;
    } else {
      score = 1;
    }
  }
  return totScore;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// lecture code
// function solution(results) {
//   let answer = 0,
//     cnt = 0;
//   for (let i of results) {
//     if (i === 1) cnt++;
//     else cnt = 0;
//     answer += cnt;
//   }
//   return answer;
// }

// console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
