function solution(budget, wishlist) {
  let maxCnt = 0;
  const n = wishlist.length;
  // 총 비용으로 오름차순 정렬
  wishlist.sort((a, b) => a[0] + a[1] - b[0] - b[0]);
  // 제일 비싼비용부터 할인 적용
  for (let i = n - 1; i >= 0; i--) {
    let sum = 0;
    const purchasable = [];
    for (let j = 0; j < n; j++) {
      let cost;
      if (i == j) cost = wishlist[j][0] / 2 + wishlist[j][1];
      else cost = wishlist[j][0] + wishlist[j][1];
      if (sum + cost <= budget) {
        purchasable.push([wishlist[j][0], wishlist[j][1]]);
        sum += cost;
      }
    }
    if (purchasable.length > maxCnt) maxCnt = purchasable.length;
  }
  return maxCnt;
}

console.time("solution");
const budget = 28;
const wishlist = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(budget, wishlist));
console.timeEnd("solution");
