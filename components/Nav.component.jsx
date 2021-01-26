import { Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
const Nav = () => (
  <>
    <Navbar bg="light" expand="sm">
      <div className="container d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/shop">E - Commerce</Navbar.Brand>
        <div>
          <a
            className="snipcart-checkout snipcart-summary"
            href="#"
            style={{ textDecoration: "none" }}
          >
            <div className="d-flex justify-content-between align-items-center">
            <span className="mr-2"><FaShoppingCart /></span>{" "}
            <small className="snipcart-total-price">$0.00</small>
            </div>
          </a>
        </div>
      </div>
    </Navbar>
  </>
);

export default Nav;
