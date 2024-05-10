//Question-3(Answer)

const fs = require('fs');
const { buffer } = require("stream/consumers");

console.log('READ START')
fs.readFile('nodejs_architecture.txt', function(err,data){
    if(err){
        console.log('Error',err)
        return err;
    }

    console.log('data',data.toString())
    console.log('READ END')
    return data;
});

//writting to file
fs.writeFile('nodejs_architecture.txt','Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.',function(err){
    if(err){
        console.log('Error in writing file!')
    }else{
        console.log('Success in writting file!');
    }
})

//Question-4(answer)

//append to txt file

fs.appendFile('nodejs_architecture.txt','The ability to multitask that Node.js provides is extremely beneficial to web apps. Its event-driven, single-threaded design rapidly processes several simultaneous requests without clogging the RAM. Additionally, its event-loop and non-blocking I/O operations allow code to be executed at a rate that indirectly influences the applications overall performance','utf8',function(err){
    if(err){
               console.log('Error in appending file!')
             }else{
                 console.log('Success in appending file!');
             }
})


//question-5(answer)

//deleting file txt file
fs.unlink('nodejs-architecture.txt',function(err){
    if(err){
        console.log('Error in deleting file!')
    }else{
        console.log('Success in deleting of file')
    }
})