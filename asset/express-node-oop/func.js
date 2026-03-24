// create an example projec twith promise

// const event = new Promise((resolve,reject)=>{
//     const name='pedro'
//     if(name==='pedro'){
//         resolve(name)
//     }
//     else{
//         reject()
//     }
// })

// event.then((name)=>{
//     console.log(name)
// }).catch(()=>{
//     console.log('error')
// })

const axios = require("axios");//this returns a promise

// async function fetchData(){}

const fetchData = async () => {
  try {
    const data = await axios.get("https://catfact.ninja/docs?api-docs.json");
    console.log(data);
  } catch (error) {
    console.log("error");
  }
};

fetchData();


// this promise and that async is the same in function, the only difference is that 
// async is shorter in syntax
// data.then((res)=>{
// console.log(res)

// }).catch((err)=>{
// console.log(err)})
// console.log(data)
