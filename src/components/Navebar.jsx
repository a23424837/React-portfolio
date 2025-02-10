import React from 'react'
import { Link } from 'react-router-dom'


export default function Navebar() {
    
  return(

    <nav class="navbar navbar-expand-lg bg-body-tertiary text-white">
  <div class="container-fluid text-white ">
    <Link class="navbar-brand ms-5 text-white ms-3 fs-3 " to="./Home">start frame work</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 me">
      
      
     
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="./about">About</Link>
        </li>
      
      
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="./portfolio">portfolio</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to="./contact">contact</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

