const express=require('express');
const axios=require('axios');
const { response } = require('express');
const PORT=8899;
const app=express();
const errorHandler=(error,req,res,next)=>{
    console.log(error.message)
    const status=error.status||400;
    res.status(status).send(error.message);
}
app.get("/products",async (req,res,next)=>{
   
    try{
       const apiResponse=await axios.get("https://jsonplaceholder.typicode.com/postss",
       {
       headers: {
        "Accept-Encoding": "application/json",
      },}
)
      console.log(apiResponse.data);
      res.status(200).json(apiResponse.data)
    // let proData=[
    //     {"id":1,"name":"A"},
    //     {"id":2,"name":"B"}
    // ]
    //    res.status(200).json(proData)
    }
    catch(err){
        //res.status(500).json({message:err})
        next(err);
    }
})
app.use(errorHandler)
app.listen(PORT,(err)=>{
   if(err) throw err;
   else console.log(`Work on ${PORT}`)
})