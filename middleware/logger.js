
const logger =(req,res,next)=>{
  console.log(`${req.method} ${req.protocol} ://${req.get('host')} ${req.originUrl}`)

  next()
}


export default logger