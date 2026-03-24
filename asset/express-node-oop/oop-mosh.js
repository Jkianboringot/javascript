// // // // // // // yeah learning this is not just about the js anymore, its about oop

// // // // // // const c = {
// // // // // //   r: 1,
// // // // // //   l: {
// // // // // //     x: 2,
// // // // // //     y: 1,
// // // // // //   },
// // // // // //   f: () => {
// // // // // //     console.log(this.r);
// // // // // //   },

// // // // // //   a: function () {
// // // // // //     console.log(this.r);
// // // // // //   },
// // // // // //   d: function () {
// // // // // //     this.f();
// // // // // //     // this is  becuase arrow function does not work well with object`)

// // // // // //     this.a();
// // // // // //     //  console.log(`this is ${a} prints 1 becuase it callable and can work with object`)
// // // // // //   },
// // // // // // };

// // // // // // c.d();

// // // // // //factory function - this is more like obejcts
// // // // // // function createC(rad){
// // // // // //   return {
// // // // // //   rad, //=> r:rad

// // // // // //   f: () => {
// // // // // //     console.log(this.rad);
// // // // // //   },

// // // // // //   d: function () {
// // // // // //     this.f();
// // // // // //   },
// // // // // // }
// // // // // // }

// // // // // // const c =createC(4)
// // // // // // console.log(c)

// // // // // //constructer function - this is more like class
// // // // // function Circle(r){
// // // // //   console.log('this',this)
// // // // //   this.r =r;
// // // // //   this.draw=function(){
// // // // //     console.log('draw');
// // // // //   }
// // // // // }

// // // // // const a = new Circle(10)
// // // // // console.log(a)

// // // // // let x =10
// // // // // let y =x

// // // // // x=20

// // // // // console.log(x,y)

// // // // // let x =10
// // // // // let y =x

// // // // // x=20

// // // // // console.log(x,y)

// // // // // let x ={v:10}
// // // // // function i(x){
// // // // //   x.v++
// // // // // }
// // // // // console.log(i(x))
// // // // // // console.log(i(x.v))
// // // // //   // i think doing it like this does not work becuase x.v is 10 which is probable
// // // // //   // considered as a primitative typeof, is of an object
// // // // // console.log(x)
// // // // // //knowing this types are important i just know this is were most bugs happend fuck

// function Circle(r){
//   console.log('this',this)
//   this.r =r;
//   this.draw=function(){
//     console.log('draw');
//   }
// }

// const a = new Circle(10)
// const h=a.location={x:1}
// console.log(h)

// const k='hola'
// console.log(a['hola']={k:'hole'})
// // // // // this is better than a.location becuase this is more robust and dynamic compate to a.location
// // // // // also we can do think like that a['hola'] ,also a.'hola' is not a thing becuase with a.k we are access the Object
// // // // // not inputing value like a['hola]

// // // function Circle(r){
// // //   console.log('this',this)
// // //   this.r =r;
// // //   this.draw=function(){
// // //     console.log('draw');
// // //   }
// // // }

// // // const a = new Circle(10)

// // // for(let x in a){
// // //   if(typeof a[x] !== 'function')
// // //       //check what is the type of a by going to a loop and checking thier type, if
// // //     // it is a function it does not include it
// // //   console.log(x,a[x])
// // // }

// // // const keyOnly=Object.keys(a)
// // //   //get only the key
// // // console.log(keyOnly)

// // // if('r' in a){
// // //   console.log('true')
// // // }

// // function Circle(r){
// //   console.log('this',this)

// //  let dl={x:0,y:0}
// //   const op =function(c){
// //     console.log('op')
// //   }
// //   ///this can no longer have access outside of,a.op()

// //   this.r =r;
// //   this.draw=function(){
// //     op(1)
// //     console.log('draw');
// //   }
// // }

// // const a = new Circle(10)
// // console.log(a.draw())

// // GEtter/Setter

// function Circle(r) {
//   console.log("this", this);

//   let dl = { x: 0, y: 0 };
//   // this.getdl= dl
//   // this is not good because it can change the value a.getdl={k:2} { k: 2 }, if you
//   // only want to show it done use this.getdl=dl just point to the dl and becuase dl is an object or reference type
//which cant be change unless its copied first then that other copy can be modified, this is also the practice

//   this.getdl = function () {
//     return dl;
//   };

//   this.r = r;
//   this.draw = function () {
//     op(1);
//     console.log("draw");
//   };

//   Object.defineProperty(this, "getdl", {
//     get: function () {
//       //  this allows you to access getdl by a.getdl instead of a.getdl()
//       // also this make sure you cannot modify 
//       return dl
//     },
//     set:function(value){
//       if(!value.x || !value.y)
//         throw new Error('INvaldi');
//       dl=value
//     }
//   });
// }

// const a = new Circle(10);
// console.log(a.getdl);
// console.log(a.getdl={l:19});//remove this becuase it breaks setter
// console.log(a.dl={x:1});
// console.log(a.getdl);

// // output
// // this Circle {}
// // { x: 0, y: 0 }
// // { l: 19 }
// // { x: 0, y: 0 }



