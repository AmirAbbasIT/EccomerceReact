import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBars,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {

var showSidebar=()=>{
    document.querySelector(".sidebar").classList.toggle("open");
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <FontAwesomeIcon icon={faBars} className="mr-2" onClick={showSidebar} />CartMe
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <aside className="sidebar">
          <div>
              <h3>Catagories</h3>
            <ul>
                <li>Mens</li>
                <li>Womens</li>
                <li>Kids</li>
            </ul>
          </div>
      </aside>
    </div>
  );
};

export default Navbar;
