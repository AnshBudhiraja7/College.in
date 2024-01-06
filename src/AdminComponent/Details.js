import React from 'react'
import './Style1.css'
const Details = () => {
  return (
    <div>
        <div className="detail-block">
          <form>
            <label className='labelt'>Email:</label>
            <input type="text" className='form-control' name='Email' placeholder='Enter college Email' />
            <label className='labelt'>Phone:</label>
           <input type="text" className='form-control' name='Phone' placeholder='Enter college Phone' />
           <div className='align'>
           <button className='btn btn-success'>Submit</button>
           </div>
          </form>
         
        </div>
    </div>
  )
}

export default Details
