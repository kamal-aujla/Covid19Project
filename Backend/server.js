const express= require('express')
const bodyparser=require('body-parser')
const cors = require('cors')
const app = express()
require('./mongoose')
const userRouter= require('./routes/userRoute')
const port= process.env.port||3001
app.listen(port,()=>{
    console.log("Server is up on port:",port)
})
// app.use(bodyparser)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cors())
app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
    res.setHeader('Access-Control-Allow-Credentials', true); 
    next();

})
app.use(userRouter);
