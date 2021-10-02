//load fs module
let fs=require("fs");
//let msg="Welcome to node js program using FS Module";
let msg="Welcome to node js program using FS Module 22\n";
//third parameter is callback function err can be any name
//first parameter is write file path second is data to write in file
// fs.writeFile("demo1.txt",msg,(err)=>{
//     if(!err){
//         console.log("data stored in file successfully");
//     }else{
//         console.log(err);
//     }
// })


fs.writeFile("demo1.txt",msg,{flag:'a+'},(err)=>{
        if(!err){
            console.log("data stored in file successfully");
        }else{
            console.log(err);
        }
    })