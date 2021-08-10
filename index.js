const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app=express();
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{console.log('Mongodb conected')})
.catch(e=> console.log(e));

app.use('/api/pins',pinRoute);
app.use('/api/users',userRoute);


let port = process.env.PORT;
if(port == null || port == ''){
    port = 8800;
}
app.listen(port,()=>{
    console.log('backend server is running');
})