const  express= require('express');
const blogsRoutes= require('./routes/blogRoutes');
const AuthRoutes = require('./routes/auth'); // Update the path accordingly

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
  .then(() => {
    console.log('Successfully Connected to MongoDB');
    app.listen(4000, () => {
      console.log('Listening on port 4000');
    });
  })
  .catch((err) => {
    console.log('Some issues regarding connection: ' + err);
  });


app.set('view engine','ejs');
// app.use(session({
//   secret: 'your-secret-key',
//   resave: false,
//   saveUninitialized: true
// }));

// // Initialize Passport.js
// app.use(passport.initialize());
// app.use(passport.session());


app.use('/',blogsRoutes);


app.use('/', AuthRoutes);














