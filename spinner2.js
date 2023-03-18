process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerChars = ['|', '/', '-', '\\', '|', '-', '\\', '|'];
let delay = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 400;
}
setTimeout(() => {
  console.log(); // Prints a new line
}, delay);
