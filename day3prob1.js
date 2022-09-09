var prompt = require('prompt-sync')();
var num = prompt('total items :');
var mpimpt= new Map();
var mpbst= new Map();
var importedgoods=['oil','iron','steel'];
var nobasetax=['headache','pills','food','chocolate','oil','book']
for(var i=0;i<importedgoods.length;i++){
    mpimpt.set(importedgoods[i],1);
}
for(var i=0;i<nobasetax.length;i++){
    mpbst.set(nobasetax[i],1);
}
var result=[];
var m=0;
while(m!=num){
    m++;
    var prompt = require('prompt-sync')();
    var s = prompt('');
    var arr=s.split(" ");
    var x=arr.length;
    var quant=arr[0];
    let bt=false;
    let impt=false;
    for(var i=0;i<x;i++){
        if(mpimpt.has(arr[i])){
            impt=true;
        }
        if(mpbst.has(arr[i])){
            bt=true;
        }
    }
    var tax=0;
    var base=arr[x-1];
    var imptax=0;
    
    if(!bt){
        tax=parseFloat(arr[x-1])*0.10;
        base=parseFloat(arr[x-1])*0.90;
    } 
    if(impt){
        imptax=base*0.05;
        base=base*0.95;
    }
    var str=''+base +'        '+imptax + '        '+tax;
    result.push(str)
}
console.log('Base price'+' '+'Import_Tax'+ ' '+'Basic Sales tax ');
for(var i=0;i<result.length;i++){
    console.log(result[i]);
    console.log("\n");
}
