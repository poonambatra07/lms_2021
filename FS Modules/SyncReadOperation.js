let fs=require("fs");
let data=fs.readFileSync("demo2.text");
let msg=data.toString();
//reading from one file and writing to other file

fs.writeFileSync("demo3.txt",msg,{flag:'a+'});
console.log("write successfully");
console.log(msg);