const express = require("express");
const fs=require("fs");
const cors = require("cors");
const mongoose=require("mongoose");

//connect sting going for lec database
const mongoDbURI="mongodb://localhost:27017/lec";
//interview question port and protocol

mongoose.connect(mongoDbURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const userSchema = new mongoose.Schema({
    // [
    //     {
    //       title: String,
    //       description: String,
    //       location: String,
    //       job_type: String,
    //       pay_rate_per_hr_dollar: Number,
    //       skills: [String],
    //       liked_by: [String],
    //       viewed_by: [String],
    //       id: Number,
    //       user_id: Number,
    //       post_by_username: String,
    //       post_by_fullname: String,
    //       post_date: String,
    //       comments: []
    //     }
    // ]
    email:String,
    username:String,
    fullname:String,
    title:String,
    skills:[String],
    address:String,
    job_type:String,
    id:Number,
    is_active:Boolean,
    followers:[String],
    followings:[String]}
);

const User = mongoose.model("user",userSchema);

// User.createCollection().then((col)=>{
//     console.log("Collection",col,"created");
// }).catch((err)=>console.log(err));



const app = express();

app.use(cors());

const PORT = 5000;

app.get('/',(req,res)=>{
    res.status(200).send("This is response from BE");
})

app.get('/api/v1/posts',(req,res)=>{
    const posts = fs.readFileSync("./data/posts.json","utf-8").toString();
    res.status(200).send(posts);
})

app.get('/api/v1/user',async(req,res)=>{
    // const posts = fs.readFileSync("./data/user.json","utf-8").toString();
    const user = await User.find({id:1});
    res.status(200).send(user);
})

app.post("/api/v1/user", async (req, resp) => {
  const lastUser = await User.findOne({}, null, { sort: { id: -1 } });

  let id = 1;
  if (lastUser) {
    id = lastUser.id + 1;
  }
  const newUser = {
    email: "test@test.com",
    username: "saroj",
    fullname: "Test User",
    title: "Software Developer",
    skills: ["JS", "PHP", "JAVA"],
    address: "Kathmnadu, Nepal",
    job_type: "Full Time",
    id: id,
    is_active: true,
    followers: [],
    followings: [],
  };
  User.create(newUser).then((createdUser) => {
    console.log("User created");
    resp.status(200).send(createdUser);
  });
});


app.listen(PORT,()=>{
console.log("App is Running on http://localhost:"+PORT);
});