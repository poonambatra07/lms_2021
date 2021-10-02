let http=require("http");
let urlInfo =require("url");
let loginpage=`
<html>
<head>
</head>
<body>
<form action ="checkLogin">
<label>UserName</label>
<input type ="text" name="user">
<label>Password</label>
<input type="password" name="pass">
<input type="submit">
<input type="reset">
</form>
</body>
</html>
`
let indexhtml=`<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        
        <h2>NOde js http Module</h2>
        <a href="login">Login Page</a>
        <a href="contactus">Contact US</a>
        <a href="aboutus">About us</a>
        <script src="" async defer></script>
    </body>
</html>`;

let server=http.createServer((req,res)=>{
    res.setHeader("content-type","text/html");
    let urlRef=urlInfo.parse(req.url,true);
    if(urlRef.pathname=="/aboutus"){
        res.write("<h2>Welcome to about us page</h2>");
    }else if(urlRef.pathname=="/contactus"){
        res.write("<h2>Welcome to contact us page</h2>");
    }else if(urlRef.pathname=="/login"){
        res.write("<font color=red>Welcome to login page</font>")
        res.write(loginpage);
    }else if(urlRef.pathname=="/checkLogin"){
        res.write("client submit form\n")
       // res.write(loginpage);
       let login=urlRef.query;
       if(login.user=="raj" && login.pass=="123"){
           res.write("user successfully login\n")
       }else{
           res.write("failure")

       }
    }else{
      //  res.write("Error ! no page found")
      res.write(indexhtml);
    }
    res.end();

});
server.listen(9094,()=>console.log("SERVER IS RUNNING ON PORT 9091"))