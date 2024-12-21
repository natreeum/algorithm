function solution(friends, gifts) {
  const giftMap = Array.from({ length: friends.length }, () =>
    Array(friends.length).fill(0)
  );
  const giftIdx = Array.from({ length: friends.length }, () =>
    Array(2).fill(0)
  );

  // parse Input
  for (let g of gifts) {
    const [giver, receiver] = g.split(" ");

    const giverIdx = friends.indexOf(giver);
    const receiverIdx = friends.indexOf(receiver);
    giftMap[giverIdx][receiverIdx]++;

    giftIdx[giverIdx][0]++;
    giftIdx[receiverIdx][1]++;
  }

  // compare
  let answer = -1;
  for (let i = 0; i < friends.length; i++) {
    let expectedGiftCount = 0;
    for (let j = 0; j < friends.length; j++) {
      if (i == j) continue;
      const iGave = giftMap[i][j];
      const jGave = giftMap[j][i];
      if (iGave > jGave) expectedGiftCount++;
      else if (iGave == jGave) {
        const iGiftIdx = giftIdx[i][0] - giftIdx[i][1];
        const jGiftIdx = giftIdx[j][0] - giftIdx[j][1];
        if (iGiftIdx > jGiftIdx) expectedGiftCount++;
      }
    }
    if (answer < expectedGiftCount) answer = expectedGiftCount;
  }
  return answer;
}

const friends_C1 = ["muzi", "ryan", "frodo", "neo"];
const gifts_C1 = [
  "muzi frodo",
  "muzi frodo",
  "ryan muzi",
  "ryan muzi",
  "ryan muzi",
  "frodo muzi",
  "frodo ryan",
  "neo muzi",
];

const friends_C2 = ["joy", "brad", "alessandro", "conan", "david"];
const gifts_C2 = [
  "alessandro brad",
  "alessandro joy",
  "alessandro conan",
  "david alessandro",
  "alessandro david",
];

const friends_C3 = ["a", "b", "c"];
const gifts_C3 = ["a b", "b a", "c a", "a c", "a c", "c a"];

console.log(solution(friends_C1, gifts_C1));
console.log(solution(friends_C2, gifts_C2));
console.log(solution(friends_C3, gifts_C3));
