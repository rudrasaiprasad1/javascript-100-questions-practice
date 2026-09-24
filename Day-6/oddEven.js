import { stdin, stdout } from "process";
import readline from "readline";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const isEven = (number = NaN) => {
  if (number === NaN) {
    return false;
  }

  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

rl.question("Enter your number ? ", (number) => {
  console.log(isEven(number));
  rl.close();
});
