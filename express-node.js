// follow this tut for node and express
// https://www.youtube.com/watch?v=ha_leEpnT30 
import cors from 'cors'
import express from 'express'

// cors
// problem live server cannot commnunicate with backend of different PORT, server is listening to 3000 while liveserve is on 5500, 
// this is a security feature so that unknown url does not access or do anything to the backend, like req and modify

// solution
// use cors, what is it? pretty much allows other PORT or frontend to request or ask something to the backend, like its making it known to 
// the backend that 'yeah this frontend is ours' 

// learned
//     i feel like this is also one of the things you need to consider when build a full System, because its common to have different compenent that needs 
//     to talk to with each other and , i think this can be use to connect to other system 



//express

//express is pretty much the one that handles operation like, route, middleware, db com etc

// this is how t works and why you cant just do const app= require('express')  
// jsconst express = require('express')  // express = the function
// const app = express()               // app = the RESULT of CALLING that function
// app is not pointing to express. app is pointing to what express returns when you call it.
// Think of it like this:
// jsfunction makeNumber() {
//     return 42
// }

// const fn = makeNumber   // fn = the function itself
// const num = makeNumber() // num = 42  (the result)

// // fn and num are NOT the same thing
// // fn is a function
// // num is 42

// const express= require('express') //using common js
const app = express()





app.use(cors({
    // this is the allowed ports that can communicate with backedn
    origin:['http://localhost:5500','http://127.0.0.1:5500']
}))

// this enable body parsing or reading what frontend send to backend, because express cant automatically read request in the json body, meaning express has no 
// way of understanding what is send, to it to enable it we do->
app.use(express.json())
    // what this do is when req comes in, it say pls parse this json data and put the result in json body
    // not my own word, this is important because without anything you send will be undefined not matter what
    //this kinda acts like a middleware, it parse the data that was send in frontend, and it trasform it here to json
    //so that express can read it,
    // update i still dont get this



//routes get
app.get('/car',(req,res)=>{
    res.send('hellow from express')
})


app.get('/car/:id',(req,res)=>{
    const par=Number(req.params.id)
    const arr=[
        {id:1,name:'fuck'},
        {id:2,name:'shit'},
    ]

    const reqdata= arr.find((i)=>i.id===par)
    res.json(reqdata)
})

app.get('/message',(req,res)=>{
    res.json({message:'you have recieve the message'})
})

// route post

app.post('/message',(req,res)=>{
    const {n,t}=req.body

    
 const arr={ name: n, message: 'Message sent' , text: t}
    
    console.log('response',n,t)
    res.json(arr)


    // res.json({message:'Message sent'})

    //ok if its like this it work maybe becuase it need ot be distructure too
})


app.listen(8000,()=>{
    console.log('the server is running at  http://localhost:3000')
})