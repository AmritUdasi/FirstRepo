const { mapFileCommentRegex } = require('convert-source-map');
var fs=require('fs');
var data=fs.readFileSync('jobs.json', 'utf8');
var fs=require('fs');
var data1=fs.readFileSync('technologies.json', 'utf8');
var techno=JSON.parse(data1)
var words=JSON.parse(data)
var mp= new Map()
for(var i=0;i<techno.length;i++){
    mp.set(techno[i],1);
}
for(var i=0;i<words.length;i++){
    var tagarray=[]
    var check=words[i].description.split(' ');
    var mp1= new Map()
    for(var j=0;j<check.length;j++){
     if(mp.has(check[j]) && !(mp1.has(check[j]))){
        tagarray.push(check[j]);
        mp1.set(check[j],1);
      }
    }
    var milliseconds = new Date().getTime();
    words[i].tags=tagarray;
    words[i].timestamp=milliseconds
}
var dat = JSON.stringify(words)
fs.writeFile("./output.json", dat, err=>{
    if(err){
      console.log("Error writing file" ,err)
    } else {
      console.log('JSON data is written to the file successfully')
    }
})