const fs=require("fs");


// let inputText=fs.readFileSync("./folder/file1.txt","utf-8");
// let output=`The output data is :${inputText} and is printed on ${Date.now()}`;
// fs.writeFileSync("./folder/file2.txt",output);





// fs.readFile("./folder/file3.txt","utf-8",(err,data1)=>{
//     fs.readFile(`./folder/${data1}.txt`,"utf-8",(err,data2)=>{
//         console.log(data2);
//     })
// })



const http=require("http");

let server=http.createServer((req,res)=>{
    res.end("Welcome to your nodes server");

});





server.listen(8080,()=>{
    console.log("Your server is running on port 8080");
})






// console.log(inputText);



