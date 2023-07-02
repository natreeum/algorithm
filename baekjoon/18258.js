function solution(commands) {
  const queue = [];
  for (let i of commands) {
    const command = i.split(" ");
    switch (command[0]) {
      case "push":
        queue.push(Number(command[1]));
        break;
      case "pop":
        if (queue.length === 0) console.log(-1);
        else console.log(queue.splice(0, 1)[0]);
        break;
      case "size":
        console.log(queue.length);
        break;
      case "empty":
        if (queue.length === 0) console.log(1);
        else console.log(0);
        break;
      case "front":
        if (queue.length === 0) console.log(-1);
        else console.log(queue[0]);
        break;
      case "back":
        if (queue.length === 0) console.log(-1);
        else console.log(queue[queue.length - 1]);
        break;
    }
  }
}

console.time("solution");
const commands = [
  "push 1",
  "push 2",
  "front",
  "back",
  "size",
  "empty",
  "pop",
  "pop",
  "pop",
  "size",
  "empty",
  "pop",
  "push 3",
  "empty",
  "front",
];
solution(commands);
console.timeEnd("solution");
