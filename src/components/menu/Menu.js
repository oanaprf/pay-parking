import React from "react";
import PropTypes from "prop-types";
import { Menu as AntdMenu } from "antd";

import * as S from "./styled";

const Menu = ({ menuItems = [], selectedMenuItem, setSelectedMenuItem }) => {
  const onClick = ({ key }) => setSelectedMenuItem(+key);
  return (
    <S.Menu onClick={onClick} mode="horizontal" selectedKeys={[`${selectedMenuItem}`]}>
      {menuItems.map((menuItem, index) => (
        <AntdMenu.Item key={index}>{menuItem}</AntdMenu.Item>
      ))}
    </S.Menu>
  );
};

Menu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  selectedMenuItem: PropTypes.number.isRequired,
  setSelectedMenuItem: PropTypes.func.isRequired,
};

export default Menu;
