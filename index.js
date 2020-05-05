
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');
const port = 8889

//DB Connection  File
require('./DB/index');

//import models
const User=require('./models/user')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

app.post('/api/user/register',(req,res)=>{
    const user=new User(req.body)

    user.save((err,user)=>{
        if (err) return res.json({success:false,err})
        return res.status(200).json({success:true})
    });

})



app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))