const express = require('express')
const app = express()
const port = 5000
const connectDB=require('./config/connectDB')
const router = require('./routes/users')
connectDB()
//creation serveur
//connection base de données
app.use(express.json())
app.use('/api/users',require('./routes/users'))




app.listen(port,error=>{
    try{
        console.log('This server is runnig')
    } catch{
        console.log(error)
    }
})