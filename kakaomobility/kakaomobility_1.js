function solution(flowers) {
  var answer = 0;
  let days = [];
  for (let i of flowers) {
    let from = i[0];
    let to = i[1];
    for (let j = from; j < to; j++) {
      days.push(j);
    }
  }
  answer = [...new Set(days)].length;
  return answer;
}
