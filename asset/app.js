// console.log(3+'3') //33
// console.log('3'+3)  //33
// console.log(3+3)  //6

// that annoying, in python or any programming langauge
// this is just an error, but in js it just combines them

// make simple cooker clicker

let num = 1

let increment=document.getElementById('counter');
let click=document.querySelector('.container span');

click.addEventListener('click',function(){
    increment.textContent= num++
})
