const { default: axios } = require('axios')
const express = require('express')

const router = express.Router()

router.get("/", async (req,res)=> {
    try{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
            console.log(response.data)
            res.send(response.data)
        })
    }
    catch(err){
        console.log("Error fetching the data",err)
    }
})

module.exports = router