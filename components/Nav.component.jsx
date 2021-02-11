import { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { FilterContext } from "../context/filterbar.context.tsx";
import { ParamsContext } from "../context/params.context.tsx";
const Nav = () => {
  const { state, dispatch } = useContext(FilterContext);
  const {
    state: { limit },
  } = useContext(ParamsContext);
  return (
    <>
      <Navbar bg="light" expand="sm">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Navbar.Brand href={`/shop/?limit=${limit}`}>
              E - Commerce
            </Navbar.Brand>
            {/* <Form>
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
            </Form> */}
          </div>

          <div className="d-flex">
            <div className="mr-5">
              {!state.searchOpened ? (
                <FaSearch
                  onClick={() => {
                    dispatch({
                      type: "TOGGLE_SEARCH",
                      payload: true,
                    });
                  }}
                />
              ) : (
                <FaTimes
                  onClick={() => {
                    dispatch({
                      type: "TOGGLE_SEARCH",
                      payload: false,
                    });
                  }}
                />
              )}
            </div>

            <div
              onClick={() =>
                dispatch({
                  type: "TOGGLE_OPEN",
                  payload: false,
                })
              }
            >
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
        </div>
      </Navbar>
    </>
  );
};

export default Nav;
