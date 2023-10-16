const express = require('express')
const router = express.Router()
const userArray = []

router.post('/userData',(req,res)=>{
    // const {name} = req.body
    

    userArray.push(req.body)
    console.log(userArray);
    
    res.json("Data has been Added Sucessfully")
})

router.get('/displayUserData',(req,res)=>{
    res.json(userArray)
})

router.get('/deleteUserData',(req,res)=>{
    
})

module.exports = router