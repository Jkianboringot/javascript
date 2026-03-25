import http from 'http'
const PORT=process.env.PORT //this does not work its undefined
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.end()
})


server.listen(8000,()=>{
    console.log('server running on port 8000')
})