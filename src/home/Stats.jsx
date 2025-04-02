import React from 'react'

function Stats() {
  return (
    <div className='container p-3s'>
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <h2 className='fs-4'>Customer-first always</h2>
    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh worth of equality investments</p>
          <h2 className='fs-4'>No spam or gimmicks</h2>
       <p className='text-muted'>No gimmicks, spam, "gamification". or annoying push notifications. High quality apps that you unseat pace, the way you like</p>
         <h2 className='fs-4'>The Zerodha universe</h2>
         <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ finetech startups offers tailored services specific to your needs</p>
         <h2 className='fs-4'>Do better with money</h2>
         <p className='text-muted'>With inivatives like Nudge and kill Switch, we don't just facilitates transaction, but activity help you do better with money.</p>
        </div>
        <div className="col-6 p-5">
          <img src="media\ecosystem.png" alt="" style={{ width: "95%" }}  className='shadow p-3 mb-5 bg-white rounded'/>
          <div className='text-center'>
            <a href="" className='mx-5' style={{textDecoration: "none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
            <a href="" className='style={{textDecoration: "none"}}'>Try kite demo</a>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Stats
