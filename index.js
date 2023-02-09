const express = require('express')

const bodyParser= require("body-parser")
const ifsc = require('ifsc')

const PORT = 4000
const app =express()

app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{4
    res.render('index',{title:"IFSC ",response:'',data:false})
})

app.post('/ifsc',(req,res)=>{
    var code = req.body.ifsc
    if(ifsc.validate(code)){
        ifsc.fetchDetails(code).then(function(response){
            console.log(response)
            res.render("index",{title:'IFSC ', response:response, data:true})
        })
    }
    else{
    res.send('IFSC Code is wrong')
    }
    
})

app.listen(process.env.PORT || PORT,() => {
    console.log();
})