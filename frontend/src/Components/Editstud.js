import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Editstud() {
  const [inputval,setInputval]=useState({
    name:'',
    address:'',
    subject:'',
    mobile:''
  })

  const setData=(e)=>{
    console.log(e.target.value)
    const {name,value} = e.target;
    setInputval((preval)=>{
      return {...preval,[name]:value}
    })
  }

  return (
    <div className='container mt-3'>
      <form className='mx-auto w-50 shadow p-5'>
        <Link className="btn btn-primary mt-5" to='/'>Home</Link>
        <h2 className='mt-3'>Edit details</h2>
  <div class="mb-3 ">
    <label htmlFor="exampleInputEmail1" class="form-label">Student Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    name='name'   onChange={setData} value={inputval.name} aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 ">
    <label htmlFor="exampleInputEmail1" class="form-label">Student Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    name='address' onChange={setData} value={inputval.address} aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 ">
    <label htmlFor="exampleInputEmail1" class="form-label">Student Subject</label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    name='subject' onChange={setData} value={inputval.subject} aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 ">
    <label htmlFor="exampleInputEmail1" class="form-label">Student Mobile</label>
    <input type="text" class="form-control" id="exampleInputEmail1" 
    name='mobile' onChange={setData} value={inputval.mobile} aria-describedby="emailHelp"/>
    
  </div>
  <button className='btn btn-primary'>Update</button>
  
</form>
    </div>
  )
}
