import React from 'react'

function Hero() {
  return (
    <div className="container pb-5" style={{backgroundColor: "blueviolet", color:"white", boxShadow: "10px 10px 5px lightblue", height: "20%"}}>
      <div className="row p-5 mt-5 mb-5">
         <div className="col-6">
          <h3>Support Portal</h3>
          <h3 className='pt-5 pb-5'>Search for an answer or browse help topics <br /> to create a ticket</h3>
          <div style={{backgroundColor: "white", borderRadius: "10px", color: "black"}} className='border p-3'>
            Eg: how i activate F&Q, why is my order getting rejected.
          </div>
          <div className='pt-5'>
         <a href="" style={{color: "white"}} className='pt-5 mx-3'>Track account opening </a> <a href="" style={{color: "white"}} className='mx-3'>Track segment activation</a>  
          </div>
          <div>
          <a href="" style={{color: "white"}} className='mx-3'>Intraday margins</a> <a href="" style={{color: "white"}} className='mx-3 pl-5'>Kite user manual</a>
          </div>
         </div>
         <div className="col-6 fs-5">
          <a href="" className='fs-5' style={{color: "white" , margin: "220px"}}>Track tickets</a>
          <h2 className='pt-5 p-5 mb-2'>Featured</h2>
          <p><a href="" style={{color: 'white'}} className='p-5 pb-5 text-center '>1. Change in expiry day of NSE derivative contracts</a></p>
          <p><a href="" className= 'p-5 pt-5' style={{color: 'white'}} >2. Latest Intraday leverages and Square-off timings</a></p>
         </div>
      </div>
    </div>
  )
}

export default Hero
