import React, { useState } from 'react'
import './signin.css'
import logo from '../assets/signinlogo.svg'
import github from '../assets/github.svg'
import sso from '../assets/sso.svg'
import side from '../assets/sidelogo.svg'
import info from '../assets/info.svg'
import gitlab from '../assets/gitlab.svg'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [selecttab, setselecttab] = useState("sass");
  return (
    <div className='landing'>
      <div className='images'>
        <img src={info}/>
        <img src={side}/>
      </div>
      <div className='frame'>
        <div className='textframe'>
          <div className='text'>
            <div className='intro'>
                <div className='logo'>
                    <img src={logo}/>
                    <p className='logotext'>CodeAnt AI</p>
                </div>
                <div className='welcome'>
                  Welcome to CodeAnt AI
                </div>
            </div>
            <div className='tabgroup'>
              <button className={`sass tab ${selecttab==="sass" ? "selected":""}`}
              onClick={()=>setselecttab("sass")}>SAAS</button>
              <button className={`sass tab ${selecttab==="selfhosted" ? "selected":""}`}
              onClick={()=>setselecttab("selfhosted")}>Self Hosted</button>
            </div>
          </div>
          <div className='horizontaltabs'>
            {selecttab==="sass" && (
              <Link to="/repositories">
                <img src={github}/>
              </Link>
            )}
            {selecttab==="selfhosted" && (
              <div className='maintabframe'>
                <div className='maintab'>
                  <Link to="/repositories">
                    <img src={gitlab}/>
                  </Link>
                  <div className='maintabtext'>Self Hosted GitLab</div>
                </div>
                <div className='maintab'>
                  <Link to="/repositories">
                    <img src={sso}/>
                  </Link>
                  <div className='maintabtext'>Sign in with SSO</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='privacy'>By signing up you agree to the <b>Privacy Policy</b></div>
      </div>
    </div>
  )
}

export default Signin