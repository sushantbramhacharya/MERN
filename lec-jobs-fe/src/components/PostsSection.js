import { Component } from "react";
import Post from "./Post";
class PostsSection extends Component{
  constructor()
  {
    super();
    this.state={
      posts:[]
    }
  }

  componentDidMount()
  {
    const that=this;
    fetch("http://localhost:5000/api/v1/posts")
    .then(resp=>resp.json())
    .then((data)=>{
      that.setState({posts:data});
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  
    render()
    {
        return <div className="posts-section">
        {this.state.posts.map((post,index)=>
          <Post post={post} key={index}/>
        )
        }
          </div>             
        ;
    }
}

export default PostsSection;