var prompt = require('prompt-sync')();
var num = prompt('total items :');
var mpimpt= new Map();
var mpbst= new Map();
var nobasetax=['headache','pills','food','chocolates','oil','book','chocolate']
for(var i=0;i<nobasetax.length;i++){
    mpbst.set(nobasetax[i],1);
}
var m=0;
var ans=0;
var total=0;
while(m!=num){
    m++;
    var prompt = require('prompt-sync')();
    var s = prompt('');
    var arr=s.split(" ");
    var x=arr.length;
    var quant=arr[0];
    let bt=false;
    let impt=false;
    total+=Number(arr[x-1]);
    for(var i=0;i<x;i++){
        if(arr[i]=='imported'){
            impt=true;
        }
        if(mpbst.has(arr[i])){
            bt=true;
        }
    }
    var tax=0;
    var base=arr[x-1];
    var imptax=0;
    if(impt){
        imptax=base*0.05;
    }
    if(!bt){
        tax=parseFloat(arr[x-1])*0.10;
    }
    imptax=parseFloat(imptax);
    tax=parseFloat(tax);
    ans+=parseFloat(imptax);
    ans+=parseFloat(tax);

}
total += parseFloat(ans);
console.log("Total:"+ total.toFixed(2));
console.log("Sales Tax:"+ ans.toFixed(2));



