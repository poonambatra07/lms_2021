let fs=require("fs");

fs.readFile("demo1.txt",(err,data)=>{
    if(!err){
        //coverting buffer to string format
        let msg=data.toString();
        //console.log(data);
        console.log(msg);

        fs.writeFile("demo4.txt",msg,(err)=>{
            if(!err){
                console.log("write done successfully");
            }else{
                console.log(err);
            }
        })
    }else{
        console.log(err);
    }
})

console.log("hello.......");
console.log("hello........");