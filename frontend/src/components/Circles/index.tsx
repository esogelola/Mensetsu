import React from 'react'
import './index.scss'
import { ReactComponent as Circle1 } from './Circles/Ellipse 2182.svg';
import { ReactComponent as Circle2 } from './Circles/Ellipse 2185.svg';
import { ReactComponent as Circle3 } from './Circles/Ellipse 2189.svg';
import { ReactComponent as Circle4 } from './Circles/Ellipse 2186.svg';
import { ReactComponent as Circle5 } from './Circles/Ellipse 2184.svg';
import { ReactComponent as Circle6 } from './Circles/Ellipse 2190.svg';
import { ReactComponent as Circle7 } from './Circles/Ellipse 2191.svg';
import { ReactComponent as Circle8 } from './Circles/Ellipse 2183.svg';
import { ReactComponent as Circle9 } from './Circles/Ellipse 2187.svg';

function Circles() {

  return (
    <>
      <Circle1 className='main-circle-1'/>
      <Circle2 className='main-circle-2'/>
      <Circle3 className='main-circle-3'/>
      <Circle4 className='main-circle-4'/>
      <Circle5 className='main-circle-5'/>
      <Circle6 className='main-circle-6'/>
      <Circle7 className='main-circle-7'/>
      <Circle8 className='main-circle-8'/>
      <Circle9 className='main-circle-9'/>
    </>
  )
}

export default Circles;