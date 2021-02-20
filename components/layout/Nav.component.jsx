import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
import { FilterContext } from "../../context/filterbar.context.tsx";
import { ParamsContext } from "../../context/params.context.tsx";
import Image from "next/image";
import NavLogo from "./NavLogo.component";
import styles from "./Nav.module.scss";
import Cheeseburger from "./Cheeseburger.component";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(FilterContext);
  const router = useRouter();
  const {
    state: { limit },
  } = useContext(ParamsContext);
  return (
    <nav
      className={`d-flex justify-content-center align-items-center ${styles.nav}`}
    >
      <NavLogo />

      <ul
        className={`${styles.navlinks} m-0 ${
          open ? styles.active : styles.navlinks
        }`}
      >
        <li
          onClick={() => {
            router.push("/");
            setOpen(false);
          }}
          className="pointer"
        >
          home
        </li>
        <li
          onClick={() => {
            router.push(`/shop?limit=${limit}`);
            setOpen(false);
          }}
          className="pointer"
        >
          shop
        </li>
        <li
          onClick={() => {
            router.push("/");
            setOpen(false);
          }}
          className="pointer"
        >
          blog
        </li>
        <li
          onClick={() => {
            router.push("/");
            setOpen(false);
          }}
          className="pointer"
        >
          lookbook
        </li>
      </ul>

      <div className={`d-flex ${styles.searchcarticons}`}>
        <div className={`ml-3 mr-3 pointer ${styles.searchicons}`}>
          {!state.searchOpened ? (
            <FaSearch
              onClick={() => {
                dispatch({
                  type: "TOGGLE_SEARCH",
                  payload: true,
                });
                setOpen(false)
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
          <a
            className={`snipcart-checkout snipcart-summary ${styles.carticon}`}
          >
            <div className="d-flex justify-content-between align-items-center">
              <span className="mr-2">
                <FaShoppingCart />
              </span>{" "}
              <small className="snipcart-total-price">$0.00</small>
            </div>
          </a>
        </div>
      </div>

      <Cheeseburger setOpen={setOpen} open={open} />

      {/* <div className="d-flex">
        <div className="links d-flex mr-5">
          <div className="home pointer" onClick={() => router.push("/")}>
            home
          </div>
          <div
            className="lookbook pointer ml-3"
            onClick={() => router.push("/")}
          >
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
              <span className="mr-2">
                <FaShoppingCart />
              </span>{" "}
              <small className="snipcart-total-price">$0.00</small>
            </div>
          </a>
        </div>
      </div> */}
    </nav>
  );
};

export default Nav;
