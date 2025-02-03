import React from 'react'
import { Link } from 'react-router-dom'

export default function Editstud() {
  return (
    <div className='container mt-3'>
      <form className='mx-auto w-50 shadow p-5'>
        <Link className="btn btn-primary mt-5" to='/'>Home</Link>
        <h2 className='mt-3'>Edit details</h2>
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
  <button className='btn btn-primary'>Update</button>
  
</form>
    </div>
  )
}
