const fs=require("fs");


let inputText=fs.readFileSync("./folder/file1.txt","utf-8");
let output=`The output data is :${inputText} and is printed on ${Date.now()}`;
fs.writeFileSync("./folder/file2.txt",output);




console.log(inputText);



