const express = require('express');
const  app = express();
let port = 4004;



app.get('/data/:id', (req,res)=>{
    let data = emp()
    let id = req.params.id
    console.log(id)
    try{
        return res.status(200).json({
            status:true,
            msg:data
        })
    }
    catch(errr){
      return errr
    }

});

let emp = ()=>{
    let empObj = {
        id:1,
        name:"hayat"
    }
    return empObj
}


app.listen(port, ()=>{
    console.log(`the port is running on ${port} `)
});