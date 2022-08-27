const http = require('http');
const url = require('url');
const fs = require('fs');

const server =  http.createServer((request, response) =>{



    // read data 
  
// syncronice
    if(request.url === '/'){
    //  fs.readFile('data.txt',(error, data)=>{
    //     if(error){
    //         response.write('Failed To writed data');
    //         response.end()
    //     }else{
    //         response.write(data);
    //         response.end()
    //         console.log(data);
    //     }
    //  })


    // Async
    // const data = fs.readFileSync('data.txt')
    // response.write(data);
    // response.end();

fs.writeFile('NewData.txt','Hello node js!!!!!!!!',(eror)=>{
    if(eror){
        response.write('Data failed');
        response.end()
    }else{
        response.write('Data read success');
        response.end()
    }
})


    }



    // const url_Address= 'http://localhost:5000/contact=mdsujon&country=bangladesh';
    //      const parse_Url = url.parse(url_Address,true);
         
    //      const quearyObject = parse_Url.query;
    //      console.log(quearyObject);


//   if(request.url === '/'){
//     response.writeHead(200,{'content-type':'application/json'});
//     response.write(JSON.stringify({ACC:'Course'}))
//     response.end()
//   }
// else if(request.url === '/contact'){
//     response.writeHead(200, {'content-type':'text/html'});
//     response.write("<p>This is contact page</p>");
//     response.end()
// }

// if(request.url ==='/body'){
//     response.writeHead(200, {'content-type':'text/html'});
//     response.write('<p>This is Body</p>');
//     response.end()
// }


})



const PORT = 5000;

server.listen(PORT)

console.log(`Server is Running ${PORT}`);
