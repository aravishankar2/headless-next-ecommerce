import { useContext } from "react";
import netlifyAuth from "../netlifyAuth";
import { Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Login } from "./Login.component";
import { FilterContext } from "../context/filterbar.context";
import { Form } from "react-bootstrap";

const Nav = () => {
  const { state, dispatch } = useContext(FilterContext);

  return (
    <>
      <Navbar bg="light" expand="sm">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Navbar.Brand href="/shop/">E - Commerce</Navbar.Brand>
            <Form>
              <Form.Check
                onChange={() => {
                  dispatch({
                    type: "TOGGLE_OPEN",
                    payload: !state.opened,
                  });
                }}
                checked={state.opened}
                type="switch"
                id="custom-switch"
                label={state.opened ? "hide filter bar" : "show filter bar"}
              />
            </Form>
          </div>

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
