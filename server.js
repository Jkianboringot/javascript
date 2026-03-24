import http from 'http'
const PORT=process.env.PORT //this does not work its undefined
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    res.write('<h1>hello bitch, fuck you</h1>')
    res.end()
})


server.listen(8000,()=>{
    console.log('server running on port 8000')
})