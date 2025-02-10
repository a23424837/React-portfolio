import React from 'react'

export default function contact() {
  return (
<>
    <div className='contact m-auto w-50 text-center mt-5'>
<h1 className='fs-1 '>conatct section</h1>
<span className='fs-3'>---------</span> <i _ngcontent-bqm-c6="" class="fa-solid fa-star fs-3"></i><span className='fs-3'>----------</span>

        
    </div>
   <form className='m-auto  w-50'>
  <div class="mb-3">
    
    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder='userName'/>
    <div  class="form-text">

    </div>
  </div>
  <div class="mb-3">
    
    <input type="password" class="form-control"  placeholder='userAge'/>
  </div>
  
  <div class="mb-3">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='userEmaile'/>
    <div id="emailHelp" class="form-text">

    </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-info fs-5 ">userPassword:</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-info text-white">Send Message</button>
</form>
  </>
  )
}
