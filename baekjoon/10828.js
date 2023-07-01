function solution(command) {
  const stack = [];
  for (let c of command) {
    const cmd = c.split(" ");
    switch (cmd[0]) {
      case "push":
        stack.push(Number(cmd[1]));
        break;
      case "pop":
        if (stack.length === 0) console.log(-1);
        else console.log(stack.pop());
        break;
      case "size":
        console.log(stack.length);
        break;
      case "empty":
        if (stack.length === 0) console.log(1);
        else console.log(0);
        break;
      case "top":
        if (stack.length === 0) console.log(-1);
        else console.log(stack[stack.length - 1]);
        break;
    }
  }
  return stack;
}

console.time("solution");
console.log(
  solution([
    "push 1",
    "push 2",
    "top",
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
    "top",
  ])
);
console.timeEnd("solution");
