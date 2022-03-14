import React from 'react'
import { Link } from 'react-router-dom'
import './HomeDiscoverButtons.css'

const HomeDiscoverButtons: React.FC = () => {
  return (
    <div className='HomeDiscoverButtons-container'>
      <Link to='map'>
        <button className="btn">Pet Adventures</button>
      </Link>
      <Link to='sitter'>
        <button className=" btn btn-primary" >Book a sitter</button>
      </Link>
    </div>
  )
}

export { HomeDiscoverButtons }