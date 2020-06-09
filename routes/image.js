const express = require('express');
const router = express.Router();
let Image = require('../models/images');

router.get('/:id', (req,res)=>{
    // console.log(req);
    Image.findById(req.params.id,function(err, image){
        if (err) console.log(err)
        // console.log(image);
        res.render('singleImage', {title: 'Single Image', image:image})
    } )
})

router.put('/:id', (req,res) =>{
    console.log(req.params.id)
    console.log(req.body);
    Image.findOneAndUpdate({_id:req.params.id},{
        name:req.body.name
    },{new: true}, function(err,image ){
        if (err) console.log(err)
        res.redirect('/')
    })
})

router.delete('/:id', (req,res) =>{
    console.log(req.params.id)

    Image.deleteOne({_id: req.params.id}, function(err){
        if (err) console.log(err)
        res.redirect('/index')
    })
})

module.exports = router