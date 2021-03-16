const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const saltRounds = 10
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    name :{
        type : String,
        maxlength:50
    },
    email:{
        type:String,
        trim : true,
        unique : 1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image: String,
    token:{
        type:String
    },
    tokenExp:{
        type:Number
    }
})

userSchema.pre("save",function(next){
    var user = this;

    if(user.isModified("password")){ //password 가 변환 될때만 암호화
        //비밀번호 암호화
        bcrypt.genSalt(saltRounds,function(err,salt){
            if(err) return next(err)

            bcrypt.hash(user.password, salt, function(err,hash){
                if(err) return next(err)
                user.password = hash
                next()
        })
    })
    }else{
        next()
    }
    
})

userSchema.methods.comparePassword = function(plainPassword,cb){
    
    //plainPassword 1234567 를 암호화 === 디비에 암호회된 비밀번호 
    //복호화 는 불가능하다
    bcrypt.compare(plainPassword, this.password, function(err,isMatch){
        if(err) return cb(err)
        return cb(null,isMatch)
    })
}

userSchema.methods.generateToken = function(cb){

    var user = this

    //jsonwebtoken 을 이용해서 token을 생성하기
    var token = jwt.sign(user._id.toHexString(), "secretToken")

    user.token = token
    user.save(function(err,user){
        if(err) return cb(err)
        cb(null,user)
    })
}

userSchema.statics.findByToken = function(token,cb){
    var user = this;

    //토큰을 decode
    jwt.verify(token, "secretToken",function(err,decoded){
        //decoded = 유저 아디디 이므로 유저를 찾아서 
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({"_id":decoded,"token":token},function(err,user){
            if(err) return cb(err)
            cb(null,user)
        })
    })

}

const User = mongoose.model("User",userSchema)

module.exports = {User}