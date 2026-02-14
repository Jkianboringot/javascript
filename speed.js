// console.log('print') for print
// console.error('error') print in error like format red
// console.warn('warning') print in warning like format yellow
// const v= 32
// console.log(`4+${v}`) similar to f'string in python

// collecting user input in backend

// const prompt=require('prompt-sync')()
// const input = prompt('type something: ')
// console.log(input)

// const reassign and array mutable
//if we run ths code below the first 2 console.log will run fine becuase const is ok where
// reassignment of value in array, like const b reassigning the first value of v[fuck] to shit
//that fine but if we reassign a new array to v then thats not allowed and it will throw an error as
//seens interminal

// const v= ['fuck','bitch']

// const a= ['bitch','fuck']

// const b=v[0]='shit'

// console.log(b)

// console.log(v)

// v=a
// console.log(v)

// block vs function scope
// let & const are block scope

//BLOCK SCOPE mean you can only access that var inside the block it is define it like, a function or if statement
// example:
//this will print 3 in terminal but also give a ReferenceError: x is not defined becuase we try printing x
//outside of if block
// if (true) {
//   let x = 3;
//   console.log(x);
// }
// console.log(x);

// FUNCTION SCOPE this mean its globally access it can be called anywhere even when its not initialize yet,
//when its called even without being initialize it will just give be undefined but it is still called it just
//give an undefined value, but after it is define or initialize it become a global variable that will give 
//the last assign value to it
// example:

// console.log(x);
// if (true) {
//   var x = 3;
//   console.log(x);
// }
// console.log(x);
// x=4
// console.log(x);
