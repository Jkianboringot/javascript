// const v=43;

// console.log(`v=${v}`);// like fstring in python it use `` or tilda
// console.error("error");
// console.warn("warning");

// prompt() give you a promt in the front end
// let o=prompt() input in browser
// console.log(o)   print what you input

const prompt = require('prompt-sync')()
const input =prompt('input:')
console.log(input)


//stupid this car cant be called unless i comment out const 
//' its saying declared food but data is not read'
var food=['fuck','bitch','boi']


for(var i=0;i<10;i++){
    console.log(i)
}

for(const f of food){
    console.log(f)
}










