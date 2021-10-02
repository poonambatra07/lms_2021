let fs=require("fs");
let emp={id:100,name:"poonam",age:32};
let emp1={id:101,name:"Prisha",age:5};

fs.writeFile("emp.json",JSON.stringify(emp1),(err)=>{
    if(!err){
        console.log("file json saved");
    }
});


//append cant work in json file
// fs.writeFile("emp.json",JSON.stringify(emp1),{flag:'a+'},(err)=>{
//     if(!err){
//         console.log("file json saved");
//     }
// });
