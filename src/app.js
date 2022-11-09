const express = require("express");
const app = express();
const path =require("path");
const hbs=require("hbs");
const { error } = require("console");
const port = process.env.PORT || 8000  //defining port that also work while actual hosting

//absolute public path
const publicPath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");

hbs.registerPartials(partialspath);
app.set('view engine','hbs');
app.set('views',templatepath);

app.use(express.static(publicPath))
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about.hbs")
})
app.get("/weather",(req,res)=>{
   res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error.hbs",{
        errormsg:"Oops! Page Not Found"
    })
})
app.listen(port,()=>{
    console.log(`listening to ${port} which is currently working`)
})