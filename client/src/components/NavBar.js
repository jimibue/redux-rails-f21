import { Menu } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>Home</Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item>About</Menu.Item>
    </Link>
    <Link to="/products">
      <Menu.Item>Products</Menu.Item>
    </Link>
    <Link to="/r-products">
      <Menu.Item>Redux Products</Menu.Item>
    </Link>
  </Menu>
);

export default NavBar;
