import { Component } from "react";

class CreatePost extends Component{
    render()
    {
        return  <div className="post-topbar">
        <div className="user-picy">
          <img src="./images/saroj-pic.jpeg" alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <a
                className="post-jb active"
                href="./index.html#"
                title=""
                >Post a Job</a
              >
            </li>
          </ul>
        </div>
      </div>;
    }
}
export default CreatePost;