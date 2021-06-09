import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";

import * as S from "./styled";
import { MAX_SPOTS } from "../../constants";

const { Title } = Typography;

const AvailableSpots = ({ parkedCars = [] }) => (
  <S.AvailableSpotsWrapper>
    <S.AvailableSpotsNumber>
      <S.AvailableSpotsText>{MAX_SPOTS - parkedCars.length}</S.AvailableSpotsText>
    </S.AvailableSpotsNumber>
    <Title>Available spots</Title>
  </S.AvailableSpotsWrapper>
);

AvailableSpots.propTypes = {
  parkedCars: PropTypes.array.isRequired,
};

export default AvailableSpots;
