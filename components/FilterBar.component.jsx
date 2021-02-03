import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHeart, FaGem, FaBoxOpen } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link  from 'next/link'

// Create 3 checkboxes to filter by items sold per
// Create a dropdown to filter by material
// Create a dropdown to filter by size (change contentful schema)
// Create a dropdown to filter by thickness
// Create a dropdown to filter by finish
// Create a dropdown to filter by product type
// Create checkboxes to filter by color
// Create a dropdown to filter by price (you must do this on the client, as i'm using a function to determine the sf price of all items. We want to filter by what is displayed)
// Create a checkbox to get only frost proof items
// Create a dropdown for color variation
const FilterBar = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ProSidebar collapsed={collapsed}>
        
      <Menu iconShape="square">
          
        {/* <MenuItem icon={<FaGem />}>Filter</MenuItem> */}
        <SubMenu title="Sold By The" icon={<FaBoxOpen />}>
          <MenuItem><Link href="/shop/20?soldByThe=box">Box</Link></MenuItem>
          <MenuItem><Link href="/shop/20?soldByThe=pc">Piece</Link></MenuItem>
          <MenuItem><Link href="/shop/20?soldByThe=sf">Square Foot</Link></MenuItem>

        </SubMenu>
        <SubMenu title="Material" icon={<FaBoxOpen />}>
          <MenuItem><Link href="/shop/20?material=Marble">Marble</Link></MenuItem>
          <MenuItem><Link href="/shop/20?material=Porcelain">Porcelain</Link></MenuItem>
          <MenuItem><Link href="/shop/20?material=Ceramic">Ceramic</Link></MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default FilterBar;
