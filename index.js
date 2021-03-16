const express = require("express")
const app = express()
const port = 3000

const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://wangjh789:741852@woowang.0csat.mongodb.net/woowang?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>console.log("MongoDB Connected ..."))
.catch((err) => console.log(err))

app.get('/',(req,res) => res.send("hello world"))

app.listen(port,()=>console.log(`example app listening on port ${port}!`))