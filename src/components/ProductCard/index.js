import React from "react";


function ProductCard(props) {
   const handleClick = event => {
       console.log(`Part Number: ${props.number}`)
       console.log(`Price: ${props.pricing}`)
   }
  return (

<div className="card mb-3" style={{width:'100%'}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.img} className="card-img" alt={props.name}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div className="content">
        <h5><strong>{props.name}</strong></h5>
        <p>PartNo:<strong>{props.number}</strong></p> 
        <p><strong className="price">{props.pricing}</strong></p>
       <button type="button" className="btn btn-warning" onClick={()=>handleClick()}>Add to Cart</button>
    </div>
   </div>
  </div>
 </div>
</div>

);
}

export default ProductCard;
