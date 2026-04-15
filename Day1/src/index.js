require('dotenv').config();
const express=require('express');
const app=express();
const main=require('./config/db');
const cookieparser=require('cookie-parser');
app.use(express.json());
app.use(cookieparser());
main()
.then(async()=>{
    app.listen(process.env.PORT,()=>{
    console.log("Server Listening at port no "+process.env.PORT);
})
})
.catch(err=> console.log("Error is Occurence"));