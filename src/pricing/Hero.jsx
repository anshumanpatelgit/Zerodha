import React from 'react'

function Hero() {
  return (
    <div className='container'>
      <div className="row p-5 mt-5 border-bottom text-center">
     <h1>Pricing</h1>
     <h3 className='fs-5 mt-3 text-muted'>free equity and flat ₹20 traday and F&O trades.</h3>
      </div>
      <div className="row p-5 mt-5">
        <div className="col-4 p-4">
          <img src="media\pricingEquity.svg" className='shadow bg-white rounded' alt="" />
          <h1>Free equity delivery</h1>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-4">
          <img src="media\intradayTrades.svg" alt=""  className='shadow bg-white rounded'/>
          <h1>Intraday and F&O trades</h1>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-4">
          <img src="media\pricing0.svg" alt="" className='shadow bg-white rounded'/>
          <h1>Free direct MF</h1>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
