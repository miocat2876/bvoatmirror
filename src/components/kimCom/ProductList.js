import React from "react";
import Category from "../kimCom/category/Category";
import MenuList from "../kimCom/menuList/MenuList";
import Paging from "../kimCom/paging/Paging";

import "../../styles/basic.css";
import "../../styles/element.css";

import "../../styles/kimWork/googleFont2.css";
import "../../styles/kimWork/googleFont.css";
import "../../styles/basic.css";
import "../../styles/element.css";
import "../../styles/console.css";
import "../../styles/ocean_normalize.css";
import "../../styles/ocean.css";

import "../../styles/kimWork/AllBovat.css";

const ProductList = () => {
  return (
    <>
      <Category />
      <MenuList />
      <Paging />
    </>
  );
};

export default ProductList;
