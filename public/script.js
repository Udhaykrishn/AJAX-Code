const input = document.querySelector('input') 
const addUserButton = document.querySelector('#btn')
const innerDiv = document.querySelector(".inner-div") 

addUserButton.addEventListener('click',addUserData)

function addUserData(){

    fetch("http://localhost:3001/userData",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        id:Date.now(),
        name:input.value,
    })
})
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
    displayUser()
})

    input.value = ""
}

function displayUser(){
    let sectoin = ""
    fetch('http://localhost:3001/displayUserData')
    .then((res)=>res.json())  
    .then((data)=>{
        data.forEach(ele=>{
            sectoin = `<section>${ele.name}</section>`
        })
        innerDiv.insertAdjacentHTML("beforeend",sectoin)
    })  
}

