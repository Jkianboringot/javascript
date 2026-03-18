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






//routes
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



app.listen(3000,()=>{
    console.log('the server is running')
})