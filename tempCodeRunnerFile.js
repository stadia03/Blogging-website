const  express= require('express');
const router= require('./routers/routes');
const app=express();
const mongoose= require('mongoose');


const mongoDb="mongodb://localhost:27017/blogs";

mongoose.connect(mongoDb)
.then(console.log("Connected to mongodb"))
.catch((e)=>{console.log("maa chud rha hai"+e)})



app.set('view engine','ejs');

app.use('/',router);


app.listen(5000);
 
























// const url="mongodb+srv://user:user@admin.nksyopz.mongodb.net/blogs?retryWrites=true&w=majority";

// //require("dotenv").config();

// //const app = express();
// app.use(express.json());

// //const port = 3001;
// //const uri = process.env.MONGODB_CONNECTION_STRING;

// mongoose.connect(url, {
//   useNewUrlParser: true,
//  // useCreateIndex: true,
//   useUnifiedTopology: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully.");
// });



// // mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex:true,useUnifiedTopology: true})
// // .then(()=>{
// //   console.log("Connected to mongodb");
// // })
// // .catch(()=>{
// //   console.log("Error connecting to mongodb",);
// // })




// // const { MongoClient, ServerApiVersion } = require('mongodb');
// // const uri = "mongodb+srv://user:user@stadia.nksyopz.mongodb.net/?retryWrites=true&w=majority";
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // client.connect(err => {
// //   const collection = client.db("test").collection("devices");
// //   // perform actions on the collection object
// //   client.close();
// // });
