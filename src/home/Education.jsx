import React from 'react'

function Education() {
  return (
    <div className='container mt-5'>
    <div className="row">
      <div className="col-6">
  <img src="media/education.svg" alt="" style={{width: "80%"}} className='shadow p-3 mb-5 bg-white rounded'/>
      </div>
     <div className="col-6 mt-5">
       <h1 className='mb-3 fs-2'>Free and open market education</h1>
       <p className='mt-2'>Varsity, the largest online stock market education book in the world covering everything from the basic to advance trading.</p>
       <a href="" className='style={{textDecoration: "none"}}'>Varsity</a>
       <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all market relation query.</p>
       <a href="" className='style={{textDecoration: "none"}}'>Trading Q&A</a>
     </div>
    
    </div>
   </div>
  )
}

export default Education
