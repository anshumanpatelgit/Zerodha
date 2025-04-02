import React from 'react'

function Brokerage() {
  return (
    <div className='container'>
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{textDecoration: "none"}}>
            <h3 className='fs-5'>Brokerage calculator</h3></a>
          <ul style={{textAlign: "left", lineHeight: "2.5"}} className='text-muted fs-6'>
            <li>Call & trade and RMS auto square-off. Additonal charges of 50 +GST per order.</li>
            <li>Digital contract notes will be seent via E-mail.</li>
            <li>Physical copies of contract notes, id required, shall be shared 20 per contract note. Courier charges apply,</li>
            <li>For NRI account.</li>
            <li>(non-PIS), 0.5% 0r 100 per excecuted order for equity (whichever is lower).</li>
            <li>For NRi account (PIS), 0.5% or 200 per executed order for equity (whichever is lower)</li>
            <li>If the account is in debit balance, any oder placed will  be charged 40 per excecuted order instead of 20 per excecuted order.</li>
          </ul>
        </div>

        <div className="col-4 p-4">
        <a href="" style={{textDecoration: "none"}}><h3 className='fs-5'>List of charges</h3></a>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
