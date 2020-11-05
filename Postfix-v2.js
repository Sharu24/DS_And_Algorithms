/**
 * ----------------------------------------------------------------------------
 *
 * @DataStructure
 *      Stack
 * @Task
 *      Implement infix to postfix conversion for basic arithmetic operations
 *      Standard Operator Precedence applicable for JS to be considered
 *      Display Appropriate Error Messages if the user input is incorrect
 *      Follow Coding Stardards
 */

/**
 * ----------------------------------------------------------------------------
 *
 * @Class Stack
 * @Methods
 *    length, push, pop, peek, traveerse
 */
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

/**
 * ----------------------------------------------------------------------------
 *
 * @Class getPostfix
 * @Steps
 *    1. Evaluate Operand
 *    2. Evaluate enclosing braces (if any)
 *    3. Evaluate Operators
 *    4. Handle Exceptions
 */

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

/* -------------------------------------------------------------------------- */

var exp1 = "(2+((3*5*9)/6)-4)";
var exp2 = "(2+((3*5*9)/6)-4)";
var exp3 = "2+5*9/6-4)";
var exp4 = "2/2+1*2/2)";
var exp5 = "(2+(3*5*9/6-4)";
var exp6 = "(122+(23))";
var exp7 = "(A+(B)/c*D)";
var exp8 = "(A   +(B)/c*D)";
var exp9 = "1**********2";
var exp10 = "++++++++++";
var exp11 = "+/-=pieqweleknlf";
var exp12 = "(18/3)^2+((13+7)*5^2)";
var exp13 = "2*20/2+(3+4)*3^2-6+15";
var exp14 = "(5.9-5.3)*7.2+1.4^2";
var exp15 = "2**2*4&3|2";

var outString = getPostfix(exp2);

console.log(outString);
