let obj=require("readline");
var r1=obj.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter The Name ",(name)=>{
    console.log("Your name is "+name);
    r1.close();

})
//this code cant work for multi value
r1.question("Enter the salary",(salary)=>{
    console.log("salary is "+salary);
    r1.close();
})