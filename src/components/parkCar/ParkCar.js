import React, { useState } from "react";
import { Typography, Button, Input } from "antd";
import PropTypes from "prop-types";
import moment from "moment";

import * as S from "./styled";

const { Title } = Typography;

const ParkCar = ({ parkedCars = [], setParkedCars }) => {
  const [carNumber, setCarNumber] = useState("");

  const onChange = ({ target: { value } }) => setCarNumber(value);

  const onClick = () =>
    setParkedCars([...parkedCars, { carNumber: carNumber, startTime: moment() }]);

  return (
    <S.ParkCarWrapper>
      <Title level={3}>Park your car</Title>
      <Input placeholder="Your car number" onChange={onChange} />
      <Button type="primary" onClick={onClick}>
        Park your car
      </Button>
    </S.ParkCarWrapper>
  );
};

ParkCar.propTypes = {
  parkedCars: PropTypes.array.isRequired,
  setParkedCars: PropTypes.func.isRequired,
};

export default ParkCar;
