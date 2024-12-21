function solution(friends, gifts) {
  // 1. 초기화
  const giftInd = {};
  const expectedGift = {};
  for (let f of friends) {
    expectedGift[f] = 0;
    giftInd[f] = 0;
  }

  // 2. 선물지수 계산
  for (let f of friends) {
    const gave = gifts.filter((e) => e.split(" ")[0] == f).length;
    const received = gifts.filter((e) => e.split(" ")[1] == f).length;

    giftInd[f] = gave - received;
  }

  // 3. 받을 선물 계산
  for (let f1 of friends) {
    for (let f2 of friends) {
      if (f1 == f2) continue;
      // 3-1. 주고받은 선물이 있는지 확인
      const f1Count = gifts.filter(
        (e) => e.split(" ")[0] == f1 && e.split(" ")[1] == f2
      ).length;
      const f2Count = gifts.filter(
        (e) => e.split(" ")[0] == f2 && e.split(" ")[1] == f1
      ).length;

      // 3-1-1. 없거나 같다면 선물지수 고려
      if (f1Count - f2Count == 0) {
        // 3-1-1-1. 선물지수가 큰 사람이 받음
        if (giftInd[f1] < giftInd[f2]) expectedGift[f2]++;
        if (giftInd[f2] < giftInd[f1]) expectedGift[f1]++;
        // 3-1-1-2. 선물지수도 같다면 아무도 안받음
        if (giftInd[f2] == giftInd[f1]) continue;
      }

      // 3-1-2. 더 많은 선물을 준 사람이 받음
      else if (f1Count < f2Count) {
        expectedGift[f2]++;
      } else if (f2Count < f1Count) {
        expectedGift[f1]++;
      }
    }
  }

  return Math.max(...Object.values(expectedGift)) / 2;
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
