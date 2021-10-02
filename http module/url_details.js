let url=require('url');
let urlInfo="http://localhost:9091/info?name=Poonam&age=32";
//let urlRef=url.URL(urlInfo); //urlparse we can also use;
//let urlRef=url.parse(urlInfo); 
let urlRef=url.parse(urlInfo,true); 
console.log(urlRef);
console.log("PROTOCOL"+urlRef.protocol)
console.log("Host "+urlRef.host)
console.log("port Number "+urlRef.port)
console.log("port Path " +urlRef.pathname)
//console.log("Query " + urlRef.query)
console.log(urlRef.query);
let emp=urlRef.query;
console.log("Name is "+emp.name)
console.log("Age is " + emp.age);