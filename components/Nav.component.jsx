import { useState, useEffect } from "react";
import netlifyAuth from "../netlifyAuth";
import { Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated);
  let [user, setUser] = useState(null);
  let login = () => {
    netlifyAuth.authenticate((user) => {
      setLoggedIn(!!user);
      setUser(user);
      netlifyAuth.closeModal();
    });
  };

  let logout = () => {
    netlifyAuth.signout(() => {
      setLoggedIn(!!user) + setUser(user);
    });
  };
  useEffect(() => {
    netlifyAuth.initialize((user) => {
      setLoggedIn(!!user);
      setUser(user);
    });
  }, [loggedIn]);
  return (
    <>
      <Navbar bg="light" expand="sm">
        <div className="container d-flex justify-content-between align-items-center">
          <Navbar.Brand href="/shop">E - Commerce</Navbar.Brand>
          {loggedIn ? (
            <div onClick={logout}>You are logged in!</div>
          ) : (
            <button onClick={login}>Log in here.</button>
          )}
          <div>
            <a
              className="snipcart-checkout snipcart-summary"
              // href="#"
              // style={{ textDecoration: "none" }}
            >
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
