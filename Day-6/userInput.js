import readline from "readline";

// Create an interface linked to the terminal's input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user a question
rl.question("What is your name? ", (answer) => {
  console.log(`Hello, ${answer}!`);

  // Stop listening for input and exit
  rl.close();
});

// // This triggers a popup box asking for input
// let name = prompt("What is your name?");

// // Logs the input back out to the console
// console.log("Hello, " + name + "!");
