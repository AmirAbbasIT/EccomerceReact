import React from 'react';
import { NavLink } from 'react-router-dom';
const Product = ({image}) => {
    return (
        <div className="col-lg-3 col-md-4">
            <NavLink to={`/product/${1}`} style={{textDecoration:"none",color:"black"}}>
            <div className="card product ">
            <div className="card-body">
            <div className="card-img">
                <img src={image}></img>
            </div>
            </div>
            <p className="price">$50</p>
            <p className="title">New Summer Shirt</p>
        </div>
            </NavLink>
            
        </div>
        
    )
}

export default Product
