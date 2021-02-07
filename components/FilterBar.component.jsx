import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaBoxOpen, FaThLarge, FaSnowflake, FaFilter } from "react-icons/fa";
import { useContext } from "react";
import { FilterContext } from "../context/filterbar.context.tsx";
import { ParamsContext } from "../context/params.context.tsx";
import { Form } from "react-bootstrap";
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
const FilterBar = () => {
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
            }}
          >
            Square Foot
          </MenuItem>
        </SubMenu>
        <SubMenu title="Material" icon={<FaThLarge />}>
          <MenuItem
            onClick={() => {
              dispatch({
                type: "MATERIAL",
                payload: "Porcelain",
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
            }}
          >
            Concrete
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
              }}
              type="checkbox"
              label="show frost proof"
            />
            {/* </Form.Group> */}
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
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default FilterBar;
