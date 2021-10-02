let fs =require("fs");
let employees=[
    {id:100,name:"poonam",age:32},
    {id:101,name:"Rahul",age:33},
    {id:102,name:"prisha",age:5}
];
let emp1={id:103,name:"Prisha1",age:5}
let emp2={id:104,name:"bunty",age:33}
fs.readFile("employee.json",(err,data)=>{
    if(!err){
        let employeeInfo=JSON.parse(data.toString());
        employeeInfo.push(emp1);
        employeeInfo.push(emp2);

        fs.writeFile("employee.json",JSON.stringify(employeeInfo),(err)=>{
            if(!err){
                console.log("record stored in file");
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
})

let data=fs.readFileSync("employee.json");
let msg=JSON.parse(data.toString());
console.log(msg);
let emp3={id:105,name:"xyz",age:50};
msg.push(emp1);
msg.push(emp2);
msg.push(emp3);



fs.writeFileSync("employee1.json",JSON.stringify(msg),{flag:'a+'});

// fs.writeFile("employee.json",JSON.stringify(employees),(err)=>{
//     if(!err){
//         console.log("record stored in file");
//     }else{
//         console.log(err);
//     }
// })

