const express = require('express');
const router = express.Router();
//retrieve all ninjas
router.get('/ninjas',function(req,res){
  res.send({type:'GET'});
});
// add a new ninja
router.post('/ninjas',function(req,res){
    console.log(req.body);
    res.send({
        type:'POST',
        name:req.body.name,
        rank:req.body.rank


});
});
// update an existing ninja
router.put('/ninjas/:id',function(req,res){
    res.send({type:'PUT'});
});
// delete a ninja
router.delete('/ninjas/:id',function(req,res){
    res.send({type:'DELETE'});
});

module.exports=router;