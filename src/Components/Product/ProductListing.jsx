import React from "react";
import Product from "./Product";
import pic from "../../Images/a.png";
import pic2 from "../../Images/b.png";
import pic3 from "../../Images/c.png";
import pic4 from "../../Images/d.png";
const ProductListing = () => {
  return (
    <div className="prduct-listing">
      <div className="row">
        <Product image={pic} />
        <Product image={pic3} />
        <Product image={pic2} />
        <Product image={pic4} />
        <Product image={pic2} />
      </div>
    </div>
  );
};

export default ProductListing;
