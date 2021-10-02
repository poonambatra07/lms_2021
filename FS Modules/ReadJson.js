let fs=require("fs");
fs.readFile("emp.json",(err,data)=>{
    if(!err){
    let msg=JSON.parse(data.toString()); //without ToString it will give buffer
    console.log(msg,msg.id,msg.name,msg.age);
console.log(`Emp name is ${msg.name} Id is ${msg.id} age is ${msg.age}`);
    }
})