const fs = require('fs');

// const text = fs.readFileSync("//home//nitesh//Disk D//text.txt"); // out of local dirc
const text = fs.readFileSync("text.txt");

console.log(text.toString())
console.log(global)
console.log("End")