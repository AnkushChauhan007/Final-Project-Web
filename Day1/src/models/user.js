const mongoose=require('mongoose');
const {Schema}=mongoose;
const userSchema=new Schema({
    firstName:{
        type:String,
        require:true,
        minLength:10,
        maxLength:20
    },
    lastName:{
        type:String,
        minLength:10,
        maxLength:20
    },
    emailID:{
type:String,
require:true,
unique:true,
trim:true,
immutable:true
    },
    age:{
        type:Number,
        min:10,
        max:60,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    problemSolved:{
        type:[string]
    }
},{
    timestamps:true
})
const User=mongoose.model("user",userSchema);   //user is the name given to the model
module.exports=User;