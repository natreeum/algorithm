function solution(board, moves) {
  const basket = [];
  let answer = 0;

  moves.forEach((move) => {
    let height = 0;
    while (board[height][move - 1] === 0) {
      height++;
      if (height > board.length - 1) return;
    }
    basket.push(board[height][move - 1]);
    board[height][move - 1] = 0;

    if (basket.length >= 2) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        answer += 2;
      }
    }
  });

  return answer;
}
