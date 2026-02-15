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

// console.log(x); if statement and function will give you the exact same result because its block
// if (true) {
//   var x = 3;
//   console.log(x);
// }
// console.log(x);
// x=4
// console.log(x);



//js type conversion

// this happens becuase js turn anything that is concat with string as string so if we do
// numeric + string it will turn that into string, something similar happens to numiric and bool

// console.log(3+'3') //33
// console.log('3'+3)  //33
// console.log(3+3)  //6
// console.log(3+true)  //4 turn true to 1
// console.log(3+true)  //3 turn true to 0

// if you use math operator other than + it will turn all even string into numeric data type

// console.log(3*'3') //9
// console.log('3'-3)  //0
// console.log(3/3)  //1
// console.log(3*true)  //4 turn true to 1
// console.log(3-true)  //0 turn true to 0

// console.log(3*'hello') //NAN becuase we cant turn hello to numeric



// manual type conversion
// const x='323'
// const y=2
//  console.log(Number(x)*y) //646

// const x='323awef'
// const y=2
//  console.log(parseInt(x)*y) //646, becuase parseint just get the number part of string it ignored the awef

 // converter
// String(var)
// Number(var)
// parseFloat(var)
// parseInt(var)




// terninary
    //similar to php terninary
// const cond=2>3? 'fuck':'no'
// console.log(cond)


//i will not include array function like push,splice because i will forgot about it, i learn it in
// php but i fogot about it adn never even use it so i will just search it rather than put it here
//i will only include things that i dont know or never incounter before 


// const [x,y]=[1,3,3,4]

// console.log(x,y) =1 3

// ...y is a spread operator take all the reminder in array that is not already assign to x and x2, the ...y must
// always be the last one it connot be in the middle or first since it will just tkae all of it
// it will give this warning A rest element must be last in a destructuring pattern
// const [x,x2,...y]=[1,3,3,4]

// console.log(x,x2,y)


const x=[1,3,3,4]
// y this will refernece x and if we change what is in y it will also affect x because they are the same which is not good
// const y=x 
//          output [ 1, 3, 3, 4, 'hello' ] [ 1, 3, 3, 4, 'hello' ]
 
// so instead of doing it const y=x where we just reference x through y which is liking poiting it itself
// we can instead copy x by using the spread operator

// const y =[...x] 
// //output [ 1, 3, 3, 4 ] [ 1, 3, 3, 4, 'hello' ]

// y.push('hello')
// console.log(x,y)


//json
//simlar to dic but more powerful

// const obj={
//     name: 'fuck',
//     age:32,
//     sayhello:function(){
//         return 'hello'
//     },
//     career:{
//         oc:'dev',
//         status:'signle'
//     }
// }

// console.log(obj.name)
// console.log(obj.sayhello)
// console.log(obj.career)
// console.log(obj.career.oc) //accessing what is inside an nested obj

// // loop through obj , in object data type we use 'in' and in array we use 'of'
// for(let kay in obj){
// console.log(kay)
// }


// const obj2={
//     c:'black',
//     arr:[1,23,4,]
//     }

// //combine two object
//     // -note if you have name in obj2 and already have it in obj it will overide the first one
//         //and display the second one , this works for obj and array store in obj, so becarefull 
//         //if something is mutable , look at example

// const obj3={...obj,...obj2}

// obj3.career.info='tech'

// // console.log(obj,obj3)

// // destructuring object

// const {name,arr}=obj3
//what this will do is only take the name and arr from obj3 and put in const key

// console.log(name,arr) //output :fuck [ 1, 23, 4 ]



// js set
const mySet=([1,2,3,])
// const mySet=new Set([1,2,3,]) same as the one above not mutable

console.log(mySet)




















