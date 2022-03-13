import React from 'react'
import './index.scss'

import {ReactComponent as Circle1} from './circles/Ellipse 2185.svg'
import {ReactComponent as Circle2} from './circles/Ellipse 2187.svg'
import {ReactComponent as Circle3} from './circles/Ellipse 2191.svg'
import {ReactComponent as Circle4} from './circles/Ellipse 2192.svg'
import {ReactComponent as Circle5} from './circles/Ellipse 2190.svg'
import {ReactComponent as Circle6} from './circles/Ellipse 2189.svg'



function index() {
  return (
    <>
      <Circle1 className='circle-signup-1'/>
      <Circle2 className='circle-signup-2'/>
      <Circle3 className='circle-signup-3'/>
      <Circle4 className='circle-signup-4'/>
      <Circle5 className='circle-signup-5'/>
      <Circle6 className='circle-signup-6'/>
    </>
  )
}

export default index