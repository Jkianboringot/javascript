// follow this tut for node and express
// https://www.youtube.com/watch?v=ha_leEpnT30 


const cors= require('cors')
// cors
// problem live server cannot commnunicate with backend of different prompt, serve is listening to 3000 while liveserve is on 5500, 
// this is a security feature so that unknown url does not access or do anything to the backend, like req and modify

// solution
// use cors, what is it? pretty much allows other frontend with different port to request or ask something to the backend, like its making it known to 
// the backend that 'yeah this frontend is ours' 

// learned
//     i feel like this is also one of the things you need to consider when build a full System, because its common to have different compenent that needs 
//     to talk to each other and , i think this can be use to connect to other system 



//express

//express is pretty much the one that handles operation like, route, middleware, db com etc
const express= require('express')
const app = express()





app.use(cors({
    // this is the allowed ports that can communicate with backedn
    origin:['http://localhost:5500','http://127.0.0.1:5500']
}))

// this enable body parsing, because express cant automatically read request in the json body, meaning express has no 
// way of understanding what is send to it to enable it we do->
app.use(express.json())
    // what this do is when req comes in pls parse that json data and put the result in json body
    // not my own word, this is important because without anything you send will be undefined not matter what
    



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
    const name =n
    const text =t
 const arr={ name: n, message: 'Message sent' , text: t}
    
    console.log('response',n,t)
    res.json(arr)


    // res.json({message:'Message sent'})

    //ok if its like this it work maybe becuase it need ot be distructure too
})


app.listen(3000,()=>{
    console.log('the server is running')
})