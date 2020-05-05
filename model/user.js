const {Schema,model}=require('mongoose')

const userSchema=new Schema({
    name:{
        type:String,
        minlength:3,
        trim:true,
        required: true
    },
    email:{
        type:String,
        minlength: 5,
        unique: true,
        trim:true,
        required: true
    },
    password:{
        type:String,
        minlength:3,
        required: true
    },
    lastName:{
        type:String,
        minlength:3,
        trim:true,
        required: true
    },
    role:{
        type:String,
        default:0
    },
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
},{
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User