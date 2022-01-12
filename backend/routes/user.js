const express = require('express')
const router = express.Router()
const User = require('../models/user')

// POST /
// create a user
router.post('/',(req,res)=>{
    const user = new User(req.body)  
    user.save(function(err,data){
        if(err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })

})

router.post("/login",(req,res)=>{
    let email = req.body.email 
    let pass = req.body.password

    User.findOne({"email":email,"password":pass},function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.send({user:data.email});
        }
    })

})


router.get('/',(req,res)=>{
    User.find(function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})

router.get('/:id',(req,res)=>{

    let id = req.params.id;
    User.findById(id,function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})



module.exports = router