function solution(n) {
  const cards = Array.from({ length: n }, (v, i) => i + 1);
  while (cards.length !== 1) {
    cards.splice(0, 1);
    cards.push(cards.splice(0, 1)[0]);
  }
  return cards[0];
}

console.time("solution");
console.log(solution(1000));
console.timeEnd("solution");
