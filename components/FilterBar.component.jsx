import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaBoxOpen,
  FaThLarge,
  FaSnowflake,
  FaFilter,
  FaBuffer,
} from "react-icons/fa";
import { useContext } from "react";
import { FilterContext } from "../context/filterbar.context.tsx";
import { ParamsContext } from "../context/params.context.tsx";
import { Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
// Create a dropdown to filter by items sold per (Done)
// Create a dropdown to filter by material (Done)
// Create a dropdown to filter by size (change contentful schema)
// Create a dropdown to filter by thickness
// Create a dropdown to filter by finish
// Create a dropdown to filter by product type
// Create checkboxes to filter by color
// Create a dropdown to filter by price (you must do this on the client, as i'm using a function to determine the sf price of all items. We want to filter by what is displayed)
// Create a checkbox to get only frost proof items (having difficulty showing ALL the products, not just ones that are either frost proof or not frost proof..may need to sort on the client side but am really trying to avoid doing this.)
// Create a dropdown for color variation
const FilterBar = ({ total }) => {
  const router = useRouter();
  const {
    state: { opened },
  } = useContext(FilterContext);
  const { state, dispatch } = useContext(ParamsContext);

  return (
    <ProSidebar collapsed={!opened}>
      <Menu iconShape="square">
        {/* <MenuItem icon={<FaGem />}>Filter</MenuItem> */}
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
              dispatch({
                type: "LOAD_MORE",
                payload: 10,
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
              dispatch({
                type: "LOAD_MORE",
                payload: 10,
              });
            }}
          >
            Name [DESC]
          </MenuItem>
        </SubMenu>
        <SubMenu title="Frost Proof" icon={<FaSnowflake />}>
          <MenuItem>
            {/* <Form.Group controlId="formBasicCheckbox"> */}
            <Form.Check
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
            {/* </Form.Group> */}
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
        <div className="w-100 d-flex justify-content-center">
          <Button
            className="mt-5 mb-5 btn btn-secondary"
            onClick={() =>
              dispatch({
                type: "LOAD_MORE",
                payload: state.limit + 20,
              })
            }
            disabled={total <= state.limit}
          >
            Load More
          </Button>
        </div>
      </Menu>
    </ProSidebar>
  );
};

export default FilterBar;
