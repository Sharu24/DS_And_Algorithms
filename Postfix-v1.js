let postfix = infix => {
  const reOpn = /[a-z]|[A-Z]|[0-9]/;
  const opr = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 3,
    "%": 4,
    "^": 5
  };

  let stack = new Stack();
  let outfix = "";
  let op = "";

  for (var i = 0; i < infix.length; i++) {
    let chr = infix[i];
    let oprIndex = Object.keys(opr).indexOf(chr);
    if (reOpn.test(chr)) {
      outfix += "" + chr;
    } else if (oprIndex !== -1) {
      if (oprIndex > opr[stack.peek()]) {
        stack.push(chr);
      } else {
        var stackEle = stack.pop();
        if (stackEle !== "-1" && stackEle !== "(") outfix += stackEle;
        stack.push(chr);
      }
    } else if (chr === "(") {
      stack.push(chr);
    } else if (chr === ")") {
      while (1) {
        var stackEle = stack.pop();
        if (stackEle === "-1" || stackEle === "(") break;
        if (stackEle === ")") continue;
        else outfix += stackEle;
      }
    }
  }

  return outfix;
};
