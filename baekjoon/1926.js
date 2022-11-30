function solution(m, n, board) {
  const queue = [];
  const visited = [];
  let blockCnt = 0;
  let biggestBlockSize = Number.MIN_SAFE_INTEGER;

  const findChildren = (y, x, board) => {
    // up, down, left, right
    const children = [];
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    const coords = [];
    for (let i = 0; i < 4; i++) {
      coords.push([y + dy[i], x + dx[i]]);
    }
    for (let i of coords) {
      if (
        i[0] >= 0 &&
        i[0] <= m - 1 &&
        i[1] >= 0 &&
        i[1] <= n - 1 &&
        board[i[0]][i[1]] === 1 &&
        !visited.includes(i.join(''))
      ) {
        children.push(i);
      }
    }
    return children;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1 && !visited.includes([i, j].join(''))) {
        blockCnt++;
        visited.push([i, j].join(''));
        let curBlockSize = 0;
        // bfs
        queue.push([i, j]);
        while (queue.length !== 0) {
          const dequeued = queue.shift();
          curBlockSize++;
          const children = findChildren(dequeued[0], dequeued[1], board);
          for (let i of children) {
            visited.push(i.join(''));
            queue.push([...i]);
          }
        }
        biggestBlockSize =
          biggestBlockSize < curBlockSize ? curBlockSize : biggestBlockSize;
      }
    }
  }
  return [blockCnt, biggestBlockSize];
}

console.log(
  solution(6, 5, [
    [1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
    [0, 0, 1, 1, 1],
  ])
);
