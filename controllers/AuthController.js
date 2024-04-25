const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res,next)=>{
  console.log("at register route");
  bcrypt.hash(req.body.password, 10, function(err, hashedPass){
    if(err){
      res.json({
        error:err
      })
    }
    let user= new User({
      name:req.body.name,
      email: req.body.email,
      phone:req.body.phone,
      password: hashedPass
    })

    user.save()
    .then(user=>{
      res.json({
        message: 'User added sucessfully!'
      })
    })
    .catch(error=>{
      res.json({
        message: 'An error occured!'
      })
    })
  })

 
}

const login = (req,res,next)=>{
  console.log("at login route");
  var username = req.body.username
  var password = req.body.password

  User.findOne({$or: [{email:username},{phone:username}]})
  .then(user=>{
    if(user){
      bcrypt.compare(password, user.password, function(err,results){
        if(err){
          res.json({
            error:err
          })
        }
        if(result){
          let token = jwt.sign({name:user.name}, 'A@#09Cda',{expiresIn:'1h'})
          res.json({
            message:'Login Sucessful!',
            token
          })
        }else{
          res.json({
            message: 'Password does not matched!'
          })
        }
      })

    } else{
      res.json({
        message:"No User found!"
      })
    }
  })
}



module.exports = {
  register , login
}