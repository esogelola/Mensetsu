import React from 'react'
import './index.scss'
import {ReactComponent as Image} from '../../assets/image 38.svg'

function Description() {
  return (
    <div className='product-description'>
      <span>Learn. Practice. Interview.</span>
      <p>
        Gain an edge with Mensetsu's video interview practice tool tailored to students studying computer science. Get instant feedback on your tone and communication. You can also practice your interview skills with a real interviewer.
      </p>
      <Image className='description-image'/>
    </div>
  )
}

export default Description;