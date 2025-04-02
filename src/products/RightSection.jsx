import React from 'react';

function RightSection(props) {
  return (
    <div className='container p-5 border-bottom' >
    <div className="row" >
     <div className="col-6 p-5"  style= {{height: '30px'}}>
       <h1 className='mb-5'>{props.productName}</h1>
       <p>{props.productDescription}</p>
       <div>
       <a href= {props.learnMore} style={{textDecoration: "none"}}>Learn More</a>
       </div>
     </div>
       <div className='col-4'>
        <img src= {props.imageURL}  className='shadow bg-white rounded' style={{height: "80%"}}/>
     </div>
    </div>
   </div>
  )
}

export default RightSection
