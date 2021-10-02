let fs=require("fs");
let msg="Welcome to node js fs module\n";
//fs.writeFileSync("demo2.text",msg);
fs.writeFileSync("demo2.text",msg,{flag:'a+'});
console.log("file saved....");