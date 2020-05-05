const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app = express()
const port = 8000

mongoose.connect('mongodb+srv://react-blog:masum143@react-blog-xhh8w.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true
}).then(()=> console.log("Mongo DB connected") )
    .catch(err=> console.log(err));


//mongodb url mongodb+srv://react-blog:<password>@react-blog-xhh8w.mongodb.net/test?retryWrites=true&w=majority


app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))