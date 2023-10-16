const express = require('express')
const app = express()
const cors = require('cors')


const staticData = require('./router/static') 
const dynamicData = require('./router/dynamic') 

const PORT = process.env.PORT || 3001
app.listen(PORT)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(staticData)
app.use(dynamicData)

app.get('/',(req,res)=>{
    res.send(`<h2>This is the Home page</h2>`)
})

app.get("*",(req,res)=>{
    res.json("No Router Available")
})