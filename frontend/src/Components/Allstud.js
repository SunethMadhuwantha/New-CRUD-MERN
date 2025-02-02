import React from 'react'

export default function Allstud() {
  return (
    <div className='container mt-5'>
        <div className='mt-5'>
            <button className='btn btn-success mt-3'>Add Student</button>
        </div>
      <table class="table mt-3">
  <thead>
    <tr className='bg-success'>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Adress</th>
      <th scope="col">Subject</th>
      <th scope="col">Mobile</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>78</td>
      <td>Otto</td>
      <td>@78,ttr,hjiyth</td>
      <td>0777856214</td>
      <td>
        <button className='btn btn-primary me-3'>View</button>
        <button className='btn btn-danger me-3'>Delete</button>
        <button className='btn btn-warning me-3'>Edit</button>
      </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>78</td>
      <td>Otto</td>
      <td>@78,ttr,hjiyth</td>
      <td>0777856214</td>
      <td>
        <button className='btn btn-primary me-3'>View</button>
        <button className='btn btn-danger me-3'>Delete</button>
        <button className='btn btn-warning me-3'>Edit</button>
      </td>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}
