var prompt = require('prompt-sync')();
var num = prompt('Enter a 1st number: ');
var prompt2 = require('prompt-sync')();
var ope = prompt('Enter a operator: ');
var prompt1 = require('prompt-sync')();
var num3 = prompt('Enter a 2nd number: ');

switch(ope) {
    case '+':
        var total=Number(num)+Number(num3);      
      break;
    case '-':
        var total=Number(num)-Number(num3); 
      break;
    case  '/':
        var total=Number(num)/Number(num3);
    case '*':
        var total=Number(num)*Number(num3);     
  }
console.log(total);