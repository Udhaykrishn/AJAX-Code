const express = require('express')
const router = express.Router()


userData = [
    {id:1,name:'John',company:'Google'}, 
    {id:2,name:'Anil',company:'Amazon'}, 
    {id:3,name:'Amal',company:'Youtube'}, 
]

router.get('/user',(req,res)=>{
    const id = parseInt(req.query.id)
    const name = req.query.name
    const newFilteredData = userData.filter((data)=>{
        if(id && name){
            return data.id === id || data.name === name
        }else{
            return(userData)
        }
    })
    res.json(newFilteredData)
})
router.get('/user/:id',(req,res)=>{
    const id = parseInt(req.params.id)

    const NewUserData = userData.filter((data,index)=> data.id === id)
    res.json(NewUserData)
})

module.exports = router