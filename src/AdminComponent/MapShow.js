import React, { useEffect, useState } from 'react'
import Mapedit from './Mapedit'

const MapShow = (props) => {
   const[Condition,SetCondition]= useState(false)
   function Change()
   {
    SetCondition(true)
   }
   function NotChange()
   {
    SetCondition(false)
   }
  return (
    <div>
        {
            Condition?<Mapedit fun={NotChange}/>:
            <div className='detial-block'>
        <label className='labelt'>Google Map:</label>
      <iframe src={props.data.Map?props.data.Map:""} width="100%" height="100%" ></iframe>
      <div className="align">
      <button className='btn btn-primary' onClick={Change}>Change</button>
      </div>
    </div>
        }
    </div>
  )
}

export default MapShow
