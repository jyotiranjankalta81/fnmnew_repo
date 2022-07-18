import React,{useState} from 'react'
import "./SignupLogin.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockIcon from '@mui/icons-material/Lock';

export const SignupLogin = () => {
    const [addclass, setaddclass] = useState("");
  return (
    <div>
        <div className={`container ${addclass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <PersonIcon className='input_field_icon'/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <LockIcon className='input_field_icon'/>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <FacebookIcon/>
              </a>
              <a href="/" className="social-icon">
                <TwitterIcon/>
              </a>
              <a href="/" className="social-icon">
                <GoogleIcon/>
              </a>
              <a href="/" className="social-icon">
                <LinkedInIcon/>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <PersonIcon className='input_field_icon'/>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <LockIcon className='input_field_icon'/>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <LockIcon className='input_field_icon'/>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
              <img src={process.env.PUBLIC_URL + "./Employer/facebook.png"} alt="_" />
                {/* <FacebookIcon/> */}
              </a>
              <a href="/" className="social-icon">
                <TwitterIcon/>
              </a>
              <a href="/" className="social-icon">
                <GoogleIcon/>
              </a>
              <a href="/" className="social-icon">
                <LinkedInIcon/>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Sign in to create your Career Path!
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => setaddclass("sign-up-mode")}>
              Sign up
            </button>
          </div>
          <img src={process.env.PUBLIC_URL + "./Employer/log.svg"} className="image" alt="log" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Have a FindMyNext Account ?</h3>
            <p>
              Login to avail the best offers for your future jobs!
            </p>
            <button className="btn transparent" onClick={() => setaddclass(" ")} id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={process.env.PUBLIC_URL + "./Employer/register.svg"} className="image" alt="register" />
        </div>
      </div>
    </div>
    </div>
  )
}
