import React from 'react'
import { useParams } from 'react-router-dom'
import pic4 from "../../Images/d.png";
const ProductDetail = () => {

    const {id} =useParams();
    console.log(id);


    return (
        <div className="detail-wrapper">
            <div className="detail-container">
            <div className="row">
                <div className="col-md-4">
                <img src={pic4} />
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <p className="product-title">Casual Men's Shirt</p>
                        <p className="product-description">What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has</p>
                        <div>
                            <input type="number" className="form-control cart-input"  />
                            <button className="btn btn-light cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProductDetail
