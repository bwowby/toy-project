// onClickSubmit(()=>{
//     console.log(this);
// });

// onClickSubmit = function(){
//     console.log(this);
// }
function onClickSubmit(){
    // https://www.youtube.com/watch?v=MhrkcQE_430&list=RDMhrkcQE_430&start_radio=1

    var youtubedl = require('youtube-dl');
    var video = youtubedl(url,['--format=18']);
    // ,{cwd:__dirname});
    video.on('info',(info)=>{
        console.log('Download Start');
        console,log('File Name'+info.filename);
        console.log('Size'+info.size);
    })
    video.pipe(fs.createWriteStream('this.mp4'));

    console.log(this);
}