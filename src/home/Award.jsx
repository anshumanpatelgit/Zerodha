import React from 'react'

function Award() {
  return (
    
      <div className="container mt-5 px-4">
        <div className="row">
          <div className="col-6 p-5 mt-5 ">
            <img src="media/largestBroker.svg" alt="" className='shadow p-3 mb-5 bg-white rounded' />
          </div>
          <div className="col-6 p-5">
            <h1 className='pb-4'>Largest stock broker in India</h1>
            <p className='mb-5'>2+ million clients contribute to over 15% of all volumes in India daily by trading and investing</p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future and Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6 pb-2">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src="media\pressLogos.png" alt="" style={{width: "90%"}} className='shadow p-3 mb-5 bg-white rounded'/>
          </div>
        </div>
      </div>
  
  )
}

export default Award
