import styles from "./Nav.module.scss";
import HamburgerMenu from "react-hamburger-menu";
import { FilterContext } from "../../context/filterbar.context";
import { useContext, useState } from "react";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cheeseburger = ({ open, setOpen }: Props) => {
  const { dispatch } = useContext(FilterContext);

  return (
    <span className={`${styles.cheeseburger} mr-3`}>
      <HamburgerMenu
        isOpen={open}
        menuClicked={() => {
          setOpen(!open);

          dispatch({
            type: "TOGGLE_SEARCH",
            payload: false,
          });
        }}
        color="gray"
        width={15}
        height={10}
      />
    </span>
  );
};

export default Cheeseburger;
