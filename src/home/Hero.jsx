import React from 'react'

function Hero() {
  return (
    <div className='container px-5 mb-5'>
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero Image"  className = "mb-5 px-5 m-6 shadow p-3 mb-5 bg-white rounded"/>
        <h1 className = "mt-5">Invest in everything</h1>
        <p>Online platform to invest to stocks, derivatives, mutual funds, and more</p>
        <button className = "p-2 btn btn-primary fs-5 mb-5" style = {{width: "20%", margin: "0 auto",  }}>Signup Now</button>
      </div>

    </div>
  )
}

export default Hero
