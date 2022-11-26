function solution(id_list, k) {
  var answer = 0;
  const coupon = {};
  for (let i of id_list) {
    const id_listToArr = i.split(' ');
    const today = [];
    for (let j of id_listToArr) {
      if (today.includes(j)) continue;
      if (!coupon[j]) coupon[j] = 0;
      if (coupon[j] < k) coupon[j]++;
      today.push(j);
    }
  }
  for (let i of Object.keys(coupon)) {
    answer += coupon[i];
  }
  return answer;
}

console.log(
  solution(
    [
      'JAY',
      'JAY ELLE JAY MAY',
      'MAY ELLE MAY',
      'ELLE MAY',
      'ELLE ELLE ELLE',
      'MAY',
    ],
    3
  )
);
