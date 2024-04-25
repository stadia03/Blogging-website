const express = require('express');
const router = express.Router();
const BLOGS = require('../models/blogs')
<<<<<<< HEAD:routes/blogRoutes.js
const passport = require('passport'); // Import passport


function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}



router.get('/',  async(req, res) => {
=======

router.get('/', async(req, res) => {
>>>>>>> 0e4c1b5fdd7d096a8c1dc80479985c898842f922:routers/routes.js

  const temp=await BLOGS.find().sort({created:'desc'});

  res.render('index', { blog: temp })
})

router.get('/edit/:id',async(req,res)=>{

  let temp = await BLOGS.findById(req.params.id);
  res.render('edit', { blog:temp});
  
})

<<<<<<< HEAD:routes/blogRoutes.js
router.get('/login',(req,res)=>{
  res.render('login');
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/', // Redirect to the home page on successful login
  failureRedirect: '/login', // Redirect back to the login page on failure
  failureFlash: true, // Enable flash messages for authentication failures
}));

router.get('/register',(req,res)=>{
  res.render('register');
})
=======

>>>>>>> 0e4c1b5fdd7d096a8c1dc80479985c898842f922:routers/routes.js

router.get('/new', (req, res) => {

  const temp={
    title: "",
    description: "",
    content: ""
  }
  res.render('new',{blog:temp});

})

router.get('/blogs/:slug',async(req,res)=>{

    const temp = await BLOGS.find({slug:req.params.slug});
    if(Object.keys(temp).length == 0){
      console.log("Cannot find the BLOG");
      res.redirect('/'); 

    }
    else
      res.render('single_blog',{blog:temp});
})

router.put('/edit/:id', async (req, res) => {
 
  
    let article = await BLOGS.findById(req.params.id);
    article.title = req.body.title
    article.description = req.body.description
    article.content = req.body.content
    try {
      article = await article.save()
      res.redirect(`/blogs/${article.slug}`)
    } catch (e) {
       console.log(e)
      res.redirect('/');
    }
  }
 
)

router.post ('/new',async (req,res)=>{
<<<<<<< HEAD:routes/blogRoutes.js
  console.log(req.body);
=======
>>>>>>> 0e4c1b5fdd7d096a8c1dc80479985c898842f922:routers/routes.js
    let temp=new BLOGS({
      title: req.body.title,
      description: req.body.description,
      content: req.body.content
      
    })

    try{
     temp= await temp.save()
     res.redirect(`/blogs/${temp.slug}`);
    }
    catch(err){
      console.log("Unable to save data"+err);
      res.render('new',{blog:temp});    
    }
})


router.delete('/:id',async(req,res)=>{
  await BLOGS.findByIdAndDelete(req.params.id);
  res.redirect('/');
})



<<<<<<< HEAD:routes/blogRoutes.js
module.exports = router;
=======
module.exports = router;
>>>>>>> 0e4c1b5fdd7d096a8c1dc80479985c898842f922:routers/routes.js
