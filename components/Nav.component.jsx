import { useState, useEffect } from "react";
import netlifyAuth from "../netlifyAuth";
import { Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Login } from "./Login.component";
const Nav = () => {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <div className="container d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/shop/20">E - Commerce</Navbar.Brand>

          {/* <Login /> */}
          <div>
            <a className="snipcart-checkout snipcart-summary">
              <div className="d-flex justify-content-between align-items-center">
                {/* <small className="snipcart-items-count text-muted "></small> */}
                <span className="mr-2">
                  <FaShoppingCart />
                </span>{" "}
                <small className="snipcart-total-price">$0.00</small>
              </div>
            </a>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Nav;
