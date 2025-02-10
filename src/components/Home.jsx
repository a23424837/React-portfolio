import React from 'react'
import avatar from '../assets/Images/avataaars (1).svg'

export default function Home() {
  return (
    <>
    
    <div className='home'>
      <div className='img'>
        <img src={avatar}></img>
      </div>
      <div className='text-home '>
        <h2>start Framework</h2>
       <span>---------</span> <i _ngcontent-bqm-c6="" class="fa-solid fa-star"></i><span>----------</span>
       <h5>Graphic Artist - Web Designer</h5> 
      </div>
    </div>
    </>
  )
}