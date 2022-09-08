var fetch =require('./node-fetch');
const fs=require('fs')
function checkResponseStatus(res) {
    if(res.ok){
        return res
    } else {
        throw new Error(`The HTTP status of the reponse: ${res.status} (${res.statusText})`);
    }
}
fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(checkResponseStatus)
    .then(res => res.json())
    .then(json => 
        fs.writeFile('outday2prob1.json', JSON.stringify(json),err=>{
        if(err){
          console.log("Error writing file" ,err)
        } else {
          console.log('JSON data is written to the file successfully')
        }
    })).catch(err => console.log(err));
