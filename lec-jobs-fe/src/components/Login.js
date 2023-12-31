import { Component } from "react";

class Login extends Component {


    constructor()
    {
      super();
      this.handleSignInCLick=this.handleSignInCLick.bind(this);
    }
    handleSignInCLick()
    {
      const formElement= document.getElementById("login-form");
      const username = formElement.elements["username"].value;
      const password = formElement.elements["password"].value;
      if(!username||!password)
      {
        document.querySelector("#err").innerHTML="Enter username and password";
        return;
      }
      fetch("http://localhost:5000/api/v1/login",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,password
        })
      }
      ).then((resp)=>resp.json())
      .then((data)=>{
        if(data.error)document.querySelector("#err").innerHTML=data.error;
        else this.props.loginUser(data.data);
      }).catch((err)=>
      {
        console.log(err);
      })
    }
    handleSignUpClick(evnt){
    const formElement= document.getElementById("signup-form");
    const username = formElement.elements["signin-username"].value;
    console.log(username);
    //Alternately querySelector("#username")
    const fullname = formElement.elements["fullname"].value;
    const email = formElement.elements["email"].value;
    const skills = formElement.elements["skills"].value.split(",");
    //split is for spliting csv into arrays
    const title = formElement.elements["title"].value;
    const address = formElement.elements["address"].value;
    const job_type = formElement.elements["job_type"].value;
    const password = formElement.elements["signin-password"].value;
    const rpassword = formElement.elements["repeat-password"].value;

    const term=formElement.elements["c2"].checked;
    if(!term)
    {
      alert("Agree Terms and Conditions");
      return;
    }
    if(password!==rpassword)
    {
      alert("Enter Same Password");
      return;
    }
    
      fetch("http://localhost:5000/api/v1/user",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          username,fullname,email,skills,
          title,address,job_type,password
        })
      }
      ).then((resp)=>resp.json())
      .then((data)=>{
        //Display Error
        if(data.error)document.querySelector("#err").innerHTML=data.error;
        else document.querySelector("#err").innerHTML="Signup Sucessful";
      }).catch((err)=>
      {
        console.log(err);
      })
    }
  render() {
    return (
      <div className="sign-in-page" style={{ background: "cornflowerblue" }}>
        <div className="signin-popup">
          <div className="signin-pop">
            <div className="row">
              <div className="col-lg-5">
                <div className="cmp-info">
                  <div className="cm-logo">
                    <img
                      src="images/lec.png"
                      alt=""
                      style={{ width: "100px" }}
                    />
                    <p>
                      LEC, is a global freelancing platform and social
                      networking where businesses and independent professionals
                      connect and collaborate remotely
                    </p>
                  </div>
                  <img src="images/lec-full.png" alt="" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="login-sec">
                  <ul className="sign-control">
                    <li data-tab="tab-1" className="current">
                      <a href="./#" title="">
                        Sign in
                      </a>
                    </li>
                    <li data-tab="tab-2">
                      <a href="./#" title="">
                        Sign up
                      </a>
                    </li>
                  </ul>
                  <div className="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    <form id="login-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="username"
                              id="username"
                              placeholder="Username"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Password"
                            />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checky-sec">
                            <div className="fgt-sec">
                              <input type="checkbox" name="cc" id="c1" />
                              <label htmlFor="c1">
                                <span></span>
                              </label>
                              <small>Remember me</small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button type="button" value="submit"
                          onClick={this.handleSignInCLick}
                          >
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="sign_in_sec" id="tab-2">
                    <h3>Sign up</h3>
                    <form id="signup-form">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="username"
                              id="signin-username"
                              placeholder="Username"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                            <i className="la la-envelope"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="fullname"
                              id="fullname"
                              placeholder="Full Name"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Title"
                            />
                            <i className="la la-user"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <select name="job_type" id="job_type">
                              <option>Job Type</option>
                              <option value="Part Time">Part Time</option>
                              <option value="Full Time">Full Time</option>
                            </select>
                            <i className="la la-task"></i>
                            <span>
                              <i className="fa fa-ellipsis-h"></i>
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="skills"
                              id="skills"
                              placeholder="Skills (comma separated)"
                            />
                            <i className="la la-cogs"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="sn-field">
                            <input
                              type="text"
                              name="address"
                              id="address"
                              placeholder="Address"
                            />
                            <i className="la la-globe"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="password"
                              name="password"
                              id="signin-password"
                              placeholder="Password"
                            />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="sn-field">
                            <input
                              type="password"
                              name="repeat-password"
                              id="repeat-password"
                              placeholder="Repeat Password"
                            />
                            <i className="la la-lock"></i>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="checky-sec st2">
                            <div className="fgt-sec">
                              <input type="checkbox" name="cc" id="c2" />
                              <label htmlFor="c2">
                                <span></span>
                              </label>
                              <small>
                                Yes, I understand and agree to the LEC Terms
                                &amp; Conditions.
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <button type="button" value="submit"
                          onClick={this.handleSignUpClick}
                          >
                            Get Started
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div id="err"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footy-sec">
          <div className="container">
            <ul>
              <li>
                <a href="./#" title="">
                  Help Center
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  About
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Career
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Forum
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Language
                </a>
              </li>
              <li>
                <a href="./#" title="">
                  Copyright Policy
                </a>
              </li>
            </ul>
            <p>
              <img src="images/copy-icon.png" alt="" />
              Copyright 2019
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;