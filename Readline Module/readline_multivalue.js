let obj=require("readline");
let r1=obj.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("ENTER the id ", (id)=>{
    r1.question("Enter the name ",(name)=>{
        r1.question("Enter the Salary ",(salary)=>{
            console.log("id is "+id);
            console.log("Name is" +name);
            console.log("Salary is" +salary)
            r1.close();
        })
    })
})