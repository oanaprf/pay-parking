import React from "react";
import PropTypes from "prop-types";
import { List, Collapse } from "antd";

import * as S from "./styled";

const ParkedCars = ({ parkedCars = [] }) => (
  <S.StyledCollapse>
    <Collapse.Panel header="Parked cars">
      <List
        dataSource={parkedCars}
        renderItem={({ carNumber }) => <List.Item>{carNumber}</List.Item>}
      />
    </Collapse.Panel>
  </S.StyledCollapse>
);

ParkedCars.propTypes = {
  parkedCars: PropTypes.array.isRequired,
};

export default ParkedCars;
