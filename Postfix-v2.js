class Stack {
  constructor() {
    this.elements = [];
    this.stackSize = 100;
  }

  length = () => this.elements.length;
  isEmpty = () => (this.elements.length ? false : true);

  push = element => {
    return this.length() === this.stackSize
      ? "OVERFLOW"
      : this.elements.push(element);
  };

  pop = () => {
    return !this.length() ? "UNDERFLOW" : this.elements.pop();
  };

  peek = () => {
    return !this.length()
      ? "UNDERFLOW"
      : this.elements[this.elements.length - 1];
  };

  traverse = () => {
    let stack = "";
    this.elements.forEach(element => (stack += "," + element));
    return stack;
  };
}

let getPostfix = infix => {
  const paranth = { openBrace: "(", closedBrace: ")" };
  const operand = /[a-z]|[A-Z]|[0-9]|\./;
  const operator = {
    "|": 8,
    "^": 9,
    "&": 10,
    "+": 14,
    "-": 14,
    "*": 15,
    "/": 15,
    "%": 15,
    "**": 16
  };

  let stack = new Stack();
  let postfix = "",
    inputChar = "",
    nextChar = "",
    dualOp = false,
    inputPrecedence = "",
    stackPrecedence = "";

  infix = infix.replace(/\s+/g, "");

  for (var i = 0; i < infix.length; i++) {
    inputChar = infix[i];

    //-- Evaluate an Operand
    if (operand.test(inputChar)) {
      postfix += "" + inputChar;
      continue;
    }
    //-- Evaluate : '('
    if (inputChar === paranth.openBrace) {
      stack.push(inputChar);
      continue;
    }
    //-- Evaluate : ')'
    if (inputChar === paranth.closedBrace) {
      while (stack.length()) {
        if (stack.peek() === paranth.openBrace) {
          stack.pop();
          break;
        }
        postfix += "" + stack.pop();
      }
      continue;
    }
    //-- Evaluate when its a Operator
    nextChar = infix[i + 1];
    if (operator[nextChar] && inputChar === nextChar) {
      inputChar = inputChar + "" + inputChar;
      dualOp = true;
      i++;
    }
    inputPrecedence = operator[inputChar];
    if (inputPrecedence && (dualOp || !operator[nextChar])) {
      if (!stack.length()) {
        stack.push(inputChar);
        continue;
      }
      while (1) {
        stackPrecedence = operator[stack.peek()];
        if (stackPrecedence && stackPrecedence >= inputPrecedence) {
          postfix += "" + stack.pop();
        } else {
          stack.push(inputChar);
          break;
        }
      }
    } else {
      return "Invalid Expression";
    }
  }
  // Pop the stack to get ops in order
  while (stack.length()) {
    if (stack.peek() === ")" || stack.peek() === "(") {
      return "Invalid Expression";
    }
    postfix += "" + stack.pop();
  }
  return postfix;
};

// console.log(getPostfix("(2+((3*5*9)/6)-4)"));
// console.log(getPostfix("2+5*9/6-4)"));
// console.log(getPostfix("2/2+1*2/2)"));
// console.log(getPostfix("(2+(3*5*9/6-4)"));
// console.log(getPostfix("(122+(23))"));
// console.log(getPostfix("(A+(B)/c*D)"));
// console.log(getPostfix("(A   +(B)/c*D)"));
// console.log(getPostfix("1**********2"));
// console.log(getPostfix("++++++++++"));
// console.log(getPostfix("+/-=pieqweleknlf"));
// console.log(getPostfix("(18/3)^2+((13+7)*5^2)"));
// console.log(getPostfix("2*20/2+(3+4)*3^2-6+15"));
// console.log(getPostfix("(5.9-5.3)*7.2+1.4^2"));
// console.log(getPostfix("2**2*4&3|2"));

/*
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
*/
