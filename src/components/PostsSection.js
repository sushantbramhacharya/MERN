import { Component } from "react";
const postData=[
  {
    "title": "PHP Developer Required",
    "description": "For a client project PHP Developer is required",
    "location": "Kathmandu",
    "job_type": "Full Time",
    "pay_rate_per_hr_dollar": 10.0,
    "skills": [
      "PHP",
      "JS",
      "HTML"
    ],
    "liked_by": [
      "test111",
      "test1",
      "test123"
    ],
    "viewed_by": [
      "test111",
      "test1",
      "test123"
    ],
    "id": 2,
    "user_id": 1,
    "post_by_username": "test123",
    "post_by_fullname": "Test User",
    "post_date": "2023-06-10T09:24:07.659034",
    "comments": [
     
    ]
  },
  {
    "title": "PHP Developer Required",
    "description": "For a client project PHP Developer is required",
    "location": "Kathmandu",
    "job_type": "Full Time",
    "pay_rate_per_hr_dollar": 10.0,
    "skills": [
      "PHP",
      "JS",
      "HTML"
    ],
    "liked_by": [
      "test111",
      "test1",
      "test123"
    ],
    "viewed_by": [
      "test111",
      "test1",
      "test123"
    ],
    "id": 3,
    "user_id": 2,
    "post_by_username": "test321",
    "post_by_fullname": "Test User2",
    "post_date": "2023-06-10T21:51:10.643105",
    "comments": [
     
    ]
  },
  {
    "title": "PHP Developer Required",
    "description": "For a client project PHP Developer is required",
    "location": "Kathmandu",
    "job_type": "Full Time",
    "pay_rate_per_hr_dollar": 10.0,
    "skills": [
      "PHP",
      "JS",
      "HTML"
    ],
    "liked_by": [
      "test111",
      "test1",
      "test123"
    ],
    "viewed_by": [
      "test111",
      "test1",
      "test123"
    ],
    "id": 4,
    "user_id": 3,
    "post_by_username": "test111",
    "post_by_fullname": "Test User2",
    "post_date": "2023-06-10T21:53:40.698655",
    "comments": [
     
    ]
  }
]
class PostsSection extends Component{
    render()
    {
        return <div className="posts-section">
        {
        [1,2,3].map((a,b)=><div  key={b} className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            <img src="./images/saroj-pic.jpeg" alt="" />
            <div className="usy-name">
              <h3>Sushant Shakya</h3>
              <span>3 min ago</span>
            </div>
          </div>
          <div className="ed-opts">
            <a
              href="./index.html#"
              title=""
              className="ed-opts-open"
              ><i className="la la-ellipsis-v"></i
            ></a>
            <ul className="ed-options">
              <li>
                <a href="./index.html#" title="">Edit Post</a>
              </li>
              <li>
                <a href="./index.html#" title="">Unsaved</a>
              </li>
              <li>
                <a href="./index.html#" title="">Unbid</a>
              </li>
              <li>
                <a href="./index.html#" title="">Close</a>
              </li>
              <li><a href="./index.html#" title="">Hide</a></li>
            </ul>
          </div>
        </div>
        <div className="epi-sec">
          <ul className="descp">
            <li>
              <img src="./images/icon8.png" alt="" /><span
                >Epic Coder</span
              >
            </li>
            <li>
              <img src="./images/icon9.png" alt="" /><span
                >India</span
              >
            </li>
          </ul>
          <ul className="bk-links" style={{display: "none"}}>
            <li>
              <a href="./index.html#" title=""
                ><i className="la la-bookmark"></i
              ></a>
            </li>
            <li>
              <a href="./index.html#" title=""
                ><i className="la la-envelope"></i
              ></a>
            </li>
          </ul>
        </div>
        <div className="job_descp">
          <h3>Senior Wordpress Developer</h3>
          <ul className="job-dt">
            <li>
              <a href="./index.html#" title="">Full Time</a>
            </li>
            <li><span>$30 / hr</span></li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Aliquam luctus hendrerit metus, ut ullamcorper
            quam finibus at. Etiam id magna sit amet...
            <a href="./index.html#" title="">view more</a>
          </p>
          <ul className="skill-tags">
            <li><a href="./index.html#" title="">HTML</a></li>
            <li><a href="./index.html#" title="">PHP</a></li>
            <li><a href="./index.html#" title="">CSS</a></li>
            <li>
              <a href="./index.html#" title="">Javascript</a>
            </li>
            <li>
              <a href="./index.html#" title="">Wordpress</a>
            </li>
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="./index.html#"
                ><i className="fas fa-heart"></i> Like</a
              >
              <img src="./images/liked-img.png" alt="" />
              <span>25</span>
            </li>
            <li>
              <a href="./index.html#" className="com"
                ><i className="fas fa-comment-alt"></i> Comment
                15</a
              >
            </li>
          </ul>
          <a href="./index.html#"
            ><i className="fas fa-eye"></i>Views 50</a
          >
        </div>
        </div>)
        }
      </div>             
        ;
    }
}

export default PostsSection;