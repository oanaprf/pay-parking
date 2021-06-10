import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";

import * as S from "./styled";
import theme from "../../theme";

const { Title } = Typography;

const ParkedCars = ({ parkedCars = [] }) => (
  <S.ParkedCarsWrapper>
    <Title level={3} style={{ color: theme.darkerColor }}>
      Parked cars
    </Title>
    <S.List
      size="small"
      dataSource={parkedCars}
      renderItem={({ carNumber }) => <S.ListItem>{carNumber}</S.ListItem>}
    />
  </S.ParkedCarsWrapper>
);

ParkedCars.propTypes = {
  parkedCars: PropTypes.array.isRequired,
};

export default ParkedCars;
