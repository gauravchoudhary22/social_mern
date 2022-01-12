   
const express = require('express')
const router = express.Router()
const Post = require('../models/post')


router.post('/',(req,res)=>{
    const post = new Post(req.body)  
    post.save(function(err,data){
        if(err) {
            console.log(err);
        }
        else {
            res.send(data);
        }
    })

})


router.get('/',(req,res)=>{
    Post.find(function(err, data) {
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
    Post.findById(id,function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    }); 
})



router.delete('/:id', function(req, res) {
    const id = req.params.id
    Post.deleteOne({_id:id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send("Data deleted");
        }
    });  
});

router.put('/:id', function(req, res) {
    const id = req.params.id
    Post.findByIdAndUpdate(id, 
    req.body, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});


module.exports = router