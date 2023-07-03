function solution(n, board) {
  // 가장자리가 0인 새로운 배열 선언 및 초기화
  const newBoard = Array.from({ length: n + 2 });
  for (let i = 0; i < n + 2; i++) {
    newBoard[i] = Array.from({ length: n + 2 });
    for (let j = 0; j < n + 2; j++) {
      if (i !== 0 && j !== 0 && i !== n + 1 && j !== n + 1)
        newBoard[i][j] = board[i - 1][j - 1];
      else newBoard[i][j] = 0;
    }
  }
  // 위 아래 양옆 확인
  const udlr = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let flag = 0;
      udlr.forEach((e) => {
        if (newBoard[i][j] > newBoard[i + e[0]][j + e[1]]) flag++;
      });
      // 위아래양옆 모두보다 큰 숫자일 경우
      if (flag === 4) answer++;
    }
  }
  return answer;
}

console.time("solution");
const n = 5;
const board = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(n, board));
console.timeEnd("solution");
