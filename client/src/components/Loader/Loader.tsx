import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import './Loader.css'

const Loader : React.FC = () => {
  return (
    <div className='Loader-container'>
      <RotatingLines
        width="100"
        strokeColor="#6495ED"
        strokeWidth="3"
        animationDuration="1"
      />
    </div>
  )
}

export { Loader }