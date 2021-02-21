import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaBoxOpen,
  FaThLarge,
  FaSnowflake,
  FaFilter,
  FaBuffer,
} from "react-icons/fa";
import { showSFPricing } from "../../helper";
import { useContext } from "react";
import { FilterContext } from "../../context/filterbar.context";
import { ParamsContext } from "../../context/params.context";
import { Form, Button } from "react-bootstrap";

const FilterBar = ({ total, allProducts, setAllProducts }) => {
  const {
    state: { opened },
  } = useContext(FilterContext);
  const { state, dispatch } = useContext(ParamsContext);

  return (
    <ProSidebar collapsed={!opened}>
      <Menu iconShape="square">
        <SubMenu title="Sold Per" icon={<FaBoxOpen />}>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "SOLD_PER",
                payload: "box",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Box
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "SOLD_PER",
                payload: "pc",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Piece
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "SOLD_PER",
                payload: "sf",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Square Foot
          </MenuItem>
        </SubMenu>
        <SubMenu title="Finish" icon={<FaBuffer />}>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "FINISH",
                payload: "Honed",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Honed
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "FINISH",
                payload: "Matte",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Matte
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "FINISH",
                payload: "Polished",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Polished
          </MenuItem>
        </SubMenu>

        <SubMenu title="Sort By:" icon={<FaFilter />}>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "ORDER",
                payload: "name_ASC",
              });
            }}
          >
            Name [ASC]
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "ORDER",
                payload: "name_DESC",
              });
            }}
          >
            Name [DESC]
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAllProducts(
                [...allProducts].sort(
                  (a, b) => showSFPricing(a) - showSFPricing(b)
                )
              );
            }}
          >
            Price [ASC]
          </MenuItem>
          <MenuItem
            onClick={() => {
              setAllProducts(
                [...allProducts].sort(
                  (a, b) => showSFPricing(b) - showSFPricing(a)
                )
              );
            }}
          >
            Price [DESC]
          </MenuItem>
        </SubMenu>
        <SubMenu title="Frost Proof" icon={<FaSnowflake />}>
          <MenuItem>
            <Form.Check
              checked={!state.frostProof}
              onChange={() => {
                dispatch({
                  type: "FROST_PROOF",
                  payload: !state.frostProof,
                });
                dispatch({
                  type: "LOAD_MORE",
                  payload: 10,
                });
              }}
              type="checkbox"
              label="show frost proof"
            />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Material" icon={<FaThLarge />}>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Porcelain",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Porcelain
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Marble",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Marble
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Ceramic",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Ceramic
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Limestone",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Limestone
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Travertine",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Travertine
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Wood",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Wood
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Glass",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Glass
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Terracotta",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Terracotta
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Concrete",
              });

              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Concrete
          </MenuItem>
        </SubMenu>
        <div className="container w-100 d-flex justify-content-between">
          <Button
            className="mt-5 mb-5 btn btn-secondary"
            onClick={() =>
              dispatch({
                type: "LOAD_MORE",
                payload: parseInt(state.limit) + 10,
              })
            }
            disabled={total <= state.limit}
          >
            Load More
          </Button>
          <Button
            className="mt-5 mb-5 btn btn-secondary"
            onClick={() =>
              dispatch({
                type: "RESET",
              })
            }
          >
            Reset Filter
          </Button>
        </div>
      </Menu>
    </ProSidebar>
  );
};

export default FilterBar;
