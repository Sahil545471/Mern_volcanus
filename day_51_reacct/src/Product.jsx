import React, { useState } from 'react';


const Product = ({product}) => {
 
  return (
    <>
    <div className='container ' >
      <div className="row " >
      <div>{product.map((p) => (
        <div key={p.id}  className='col-md-4 col-lg-4 my-3'> 
          <div className="card " style={{width: "18rem"}}>
  <div className='d-flex justify-content-center align-item-center'>
  <img src={p.imgSrc} className="card-img-top" alt="..." style={{width: "120px"}}/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{p.title}</h5>
    <p className="card-text">{p.description}</p>
    <a href="#" className="btn btn-primary mx-3">{p.price}</a>
    <a href="#" className="btn btn-primary">Add to cart</a>
  </div>
</div>
 </div>
      ))}
      </div>

    </div>
    
    </div>
    </>
  )
}

export default Product