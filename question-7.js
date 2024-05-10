const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url == '/'){
        res.write('I am happy to learn Full stack webdevelopment from PW_SKILLS')
    }
    res.end();
})


server.listen(5000);

console.log('The server is running on port 5000')