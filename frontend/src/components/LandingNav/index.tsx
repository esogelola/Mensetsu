
import React from 'react'
import { ReactComponent as Cat } from '../../assets/solo-cat.svg'
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import './index.scss'

function index() {
  return (
    <div className='landingnav'>
      <div className='navlinks'>
        <div className="navlogo">
          MENSETSU
        </div>
        <div className='navlink-item selected'>Feature</div>
        <div className='navlink-item'>Pricing</div>
        <div className='navlink-item'>About Us</div>
        <div className='navlink-item'>Become a Pro Kitten</div>
      </div>
      <Link to={ROUTES.SIGN_IN}>
        <button className='login-btn'>Log in</button>
      </Link>
    </div>
  )
}

export default index