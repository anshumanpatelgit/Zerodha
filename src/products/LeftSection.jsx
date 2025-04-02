import React from 'react';

function LeftSection(props ) {
  return (
    <div className='container mt-5 border-bottom'>
     <div className="row ">
      <div className="col-6">
        <img src={props.imageURL} alt="" className='shadow bg-white rounded mt-5' style={{height: "75%"}}/>
      </div>
      <div className="col-6 p-5">
        <h1 className='mb-5'>{props.productName}</h1>
        <p>{props.productDescription}</p>
        <div className='my-4'>
        <a href= {props.tryDemo} style={{textDecoration: "none"}}>Try Demo</a>
        <a href= {props.learnMore} style={{marginLeft: "50px", textDecoration: "none"}}>Learn More</a>
        </div>
        <div className='mt-4 flex'>
        <a href= {props.googlePlay} style={{marginLeft: "50px"}} className='pr-7 mx-0'><img src='media\googlePlayBadge.svg'/></a>
        <a href= {props.appStore}><img src='media\appstoreBadge.svg' className='pl-5'/></a>
      </div>
      </div>
     </div>
    </div>
  )
}

export default LeftSection
