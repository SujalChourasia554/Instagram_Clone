const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')


mongoose.connect('mongodb://0.0.0.0/Insatgram_Database');

const userSchema=mongoose.Schema({
  username:String,
  password:String,
  fullname:String,
  dob:String,
  email:String,
  bio:String,
  profileImage:{
    type:String, 
    default:"default.jpg"
  },

  followers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
  }],

  following:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
  }],
  
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post",
  }],
  
  savedPost:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"post",
  }],

  stories:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"story",
  }],
  
})

userSchema.plugin(plm);
module.exports = mongoose.model('user',userSchema);