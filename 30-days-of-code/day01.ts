"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

function main() {
  let i = 4;
  let d = 4.0;
  let s = "HackerRank ";

  let intVar: number = Number.parseInt(readLine());
  let doubleVar: number = Number.parseFloat(readLine());
  let stringVar: string = readLine();

  console.log(i + intVar);
  console.log((d + doubleVar).toFixed(1));
  console.log(s + stringVar);
}
