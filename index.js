const  express= require('express');
const router= require('./routers/routes');
const app=express();
const methodOverride = require('method-override');
const mongoose= require('mongoose');
require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.json());

// const mongoDb="mongodb://0.0.0.0:27017/blogs";  for local db host
const mongoDb=process.env.mongoDbkeys;


mongoose.connect(mongoDb)
.then(console.log("Sucessfully Connected to mongoDB"))
.then(()=>{
  app.listen(4000);
 console.log("Listening on port 4000");
})
.catch((err)=>{console.log("Gand fatt rhe hai"+err)})


app.set('view engine','ejs');


app.use('/',router);























