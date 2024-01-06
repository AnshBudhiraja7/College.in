import React from 'react'
import CountUp from 'react-countup';
const Wrappercount = () => {
  return (
   <div className="satisfied-wrapper">
  <div className="container">
    <div className="col-sm-3 counter">
      <div className="number animateNumber" data-num={60}><span><CountUp end={60} /></span></div>
      <p>Teachers</p>
    </div>
    <div className="col-sm-3 counter">
      <div className="number animateNumber" data-num={80}> <span><CountUp end={80} /></span></div>
      <p>Courses</p>
    </div>
    <div className="col-sm-3 counter">
      <div className="number animateNumber" data-num={1800}> <span><CountUp end={1800} /></span></div>
      <p>Students</p>
    </div>
    <div className="col-sm-3 counter">
      <div className="number animateNumber" data-num={28}> <span><CountUp end={28} /></span></div>
      <p>Countries</p>
    </div>
  </div>
</div>

  )
}

export default Wrappercount
