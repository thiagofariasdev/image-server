const reset = "\x1b[0m";
const redFg = "\x1b[31m";
const blueFg = "\x1b[34m";
const greenFg = "\x1b[32m";
const redBg = "\x1b[41m";
const blueBg = "\x1b[44m";
const greenBg = "\x1b[42m";

module.exports = {
  error(...args) {
    console.log(`[ERROR ${new Date().toUTCString()}] `, ...args, reset);
  },
  print(...args) {
    console.log(`[PRINT ${new Date().toUTCString()}] `, ...args, reset);
  }
};
