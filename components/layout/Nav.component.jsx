import { useContext } from "react";
import { Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { FilterContext } from "../../context/filterbar.context.tsx";
import { ParamsContext } from "../../context/params.context.tsx";
import Image from "next/image";

const Nav = () => {
  const { state, dispatch } = useContext(FilterContext);
  const router = useRouter();
  const {
    state: { limit },
  } = useContext(ParamsContext);
  return (
    <>
      <Navbar expand="sm">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Navbar.Brand href={`/`}>
              <div className="d-flex">
                <Image
                  layout="fixed"
                  width={48}
                  height={53}
                  src="logo_dpy9dj"
                />
                <div className="logo-text d-flex flex-column ml-2">
                  <div className="sg">SURFACE GROUP</div>
                  <div className="i">INTERNATIONAL</div>
                </div>
              </div>
            </Navbar.Brand>
          </div>

          <div className="d-flex">
            <div className="links d-flex mr-5">
              <div className="home pointer" onClick={() => router.push("/")}>
                home
              </div>
              <div className="lookbook pointer ml-3" onClick={() => router.push("/")}>
                lookbook
              </div>
              <div
                className="shop ml-3 pointer"
                onClick={() => router.push(`/shop?limit=${limit}`)}
              >
                shop
              </div>
            </div>

            <div className="mr-3 pointer">
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
