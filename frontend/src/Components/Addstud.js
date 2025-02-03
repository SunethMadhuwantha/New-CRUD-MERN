import React from 'react'

export default function Addstud() {
  return (
    <div className='container mt-5'>
      <form className='mx-auto w-50 shadow p-5'>
        <h2>Fill up details</h2>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Student Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Student Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Student Subject</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Student Mobile</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <button className='btn btn-primary'>Add</button>
  
</form>
    </div>
  )
}
