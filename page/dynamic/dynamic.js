
const userArray = [];

app.post('/addUser',(req,res)=>{
    const {name} = req.body
    userArray.push(name)

    res.json("Data is added")
})
app.post('/displayUser',(req,res)=>{
    res.json(userArray)
})
