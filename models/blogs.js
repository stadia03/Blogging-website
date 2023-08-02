const mongoose= require('mongoose');
const slugify= require('slugify');
const { marked } = require('marked')
// const marked = require('marked');  //const markdown to html
// import { marked } from "https://cdn.skypack.dev/marked@4.0.16"; 
const createDomPurify= require('dompurify');  //importing the library
const {JSDOM}= require('jsdom');          //importing the only jsdom part
const dompurify = createDomPurify(new JSDOM().window)   // crate html and purify or sanitize it


const Schemamodel = new mongoose.Schema({
  
  title:{
    type: String,
    required: true

  },
  description:{
    type: String
  },
  content:{
    type: String,
    required: true
  },
  created:{
    type: Date,
    default: Date.now //default takes an function ()=> Date.now()  
  },
  slug:{
    type: String,
    required: true,
    unique: true
  },
  sanitizeHTML :{
    type:String,
    required:true
  }

})

//everytime this function will run or called before we validate our model in post,delete anything..

Schemamodel.pre('validate',function(next){
 // console.log("in function");
  if(this.title){ //this refers to this article
    this.slug=slugify(this.title,{lower:true,strict:true})
  }

  if (this.content){
    this.sanitizeHTML= dompurify.sanitize(marked(this.content));
  }

  next()
})





module.exports = mongoose.model('blogs', Schemamodel); 
