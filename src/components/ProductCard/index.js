import React from "react";
import CardBtn from "../CardBtn"

function ProductCard(props) {
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
        {/* <ul>
        <li>
           <strong>{props.name}</strong>
        </li>
        <li>
          PartNo:<strong>{props.number}</strong> 
        </li>
        <li>
          <strong className="price">{props.pricing}</strong>
        </li>
      </ul> */}
       <button type="button" className="btn btn-warning">Add to Cart</button>
       {/* <button onClick={props.onClick} className={`card-btn ${props["data-value"]}`} {...props} /> */}
       {/* <button onClick={this.onButtonClick}>Add to Cart</button> */}
    </div>
   </div>
  </div>
 </div>
</div>

);
}

export default ProductCard;
