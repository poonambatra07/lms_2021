let fs =require("fs");
fs.copyFile("demo4.txt","sample.txt",(err)=>{
    if(!err){
        console.log("copied file");
    }else{
        console.log("err");
    }
})