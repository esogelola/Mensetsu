import React from 'react'
import Signin from '../../components/SignIn'
import Circles from '../../components/Circles-signin'

function SigninPage() {
  return (
    <div className='app-signin'>
      <Signin />
      <Circles />
    </div>
  )
}

export default SigninPage