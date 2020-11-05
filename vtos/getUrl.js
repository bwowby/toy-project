const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer(function(req,res){
    let _url = req.url;
    let queryData = url.parse(_url,true).query;
    console.log("this is");
    console.log(url);
  
    if(_url === '/'){
        _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return res.writeHead(404);
      }
    res.writeHead(200);
    // res.end(fs.readFileSync(url));
    res.end(queryData.id);
});
app.listen(8080); 

// var onClickSubmit= ()=>{
//     // https://www.youtube.com/watch?v=MhrkcQE_430&list=RDMhrkcQE_430&start_radio=1

//     var youtubedl = require('youtube-dl');
//     var video = youtubedl(url,['--format=18']);
//     // ,{cwd:__dirname});
//     video.on('info',(info)=>{
//         console.log('Download Start');
//         console,log('File Name'+info.filename);
//         console.log('Size'+info.size);
//     })
//     video.pipe(fs.createWriteStream('this.mp4'));

//     console.log(this);
// }