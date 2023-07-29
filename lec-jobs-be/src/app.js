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

User.createCollection().then((col)=>{
    console.log("Collection",col,"created");
}).catch((err)=>console.log(err));

// User.create(
//     [
//         {
//           title: "PHP Developer Required",
//           description: "For a client project PHP Developer is required",
//           location: "Kathmandu",
//           job_type: "Full Time",
//           pay_rate_per_hr_dollar: 10.0,
//           skills: [
//             "PHP",
//             "JS",
//             "HTML"
//           ],
//           liked_by: [
//             "test111",
//             "test1",
//             "test123"
//           ],
//           viewed_by: [
//             "test111",
//             "test1",
//             "test123"
//           ],
//           id: 2,
//           user_id: 1,
//           post_by_username: "test123",
//           post_by_fullname: "Test User",
//           post_date: "2023-06-10T09:24:07.659034",
//           comments: [
           
//           ]
//         }
//     ]
// ).then(()=>{
//     console.log("Created");
// })

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

app.listen(PORT,()=>{
console.log("App is Running on http://localhost:"+PORT);
});