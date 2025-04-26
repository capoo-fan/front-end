import * as math from "mathjs";

let display = document.getElementById("display");
let expression = " ";
let operator = ["+", "-", "*", "/"];

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = button.textContent;
      switch (value) {
        case "AC":
          expression = " ";
          display.value = expression;
          break;
        case "=":
          if (expression === "Error!") expression = " ";
          expression = cal(expression);
          display.value = expression;
          break;
        case "←":
          if (expression === "Error!") expression = " ";
          if (expression.length) expression = expression.slice(0, -1);
          else expression = " ";
          display.value = expression;
          break;
        default:
          if (expression === "Error!") expression = " ";
          expression += value;
          display.value = expression;
          break;
      }
    });
  });
});

function cal(expression) {
  try {
    const result = math.evaluate(expression);
    return result.toString();
  } catch (error) {
    return "Error!";
  }
}
