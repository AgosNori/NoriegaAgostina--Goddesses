const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine","ejs");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",require("./routes/indexRoutes"));

app.listen(PORT,()=>{
    console.log('Server in port',PORT);
});