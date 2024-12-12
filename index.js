
const express =  require("express");
const app = express()
const bodyparser = require('body-parser');
app.use(bodyparser.json());


app.get('/test', (req,res)=>{
    return res.send("hi there")
})
app.listen(3031,()=>{
    console.log('working on 3030')
});