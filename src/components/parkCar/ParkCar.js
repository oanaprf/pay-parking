import React, { useState } from "react";
import { Typography, Button, Input, message } from "antd";
import PropTypes from "prop-types";
import moment from "moment";

import * as S from "./styled";

const { Title } = Typography;

const ParkCar = ({ parkedCars = [], setParkedCars }) => {
  const [carNumber, setCarNumber] = useState("");

  const onChange = ({ target: { value } }) => setCarNumber(value);

  const onClick = () => {
    if (!carNumber.match(/^[A-Z]{1,2}[0-9]{2,3}[A-Z]{3}$/)) {
      message.error("Car number must be of type JJNNLLL, BNNLLL or BNNNLLL");
    } else if (parkedCars.some(({ carNumber: number }) => number === carNumber))
      message.error("A car with this number is already parked.");
    else {
      const currentTime = moment();
      setParkedCars([...parkedCars, { carNumber: carNumber, startTime: currentTime }]);
      message.success(
        `You parked your car ${carNumber} at ${currentTime.format("h:mm")}`
      );
      setCarNumber("");
    }
  };

  return (
    <S.ParkCarWrapper>
      <Title level={3}>Park your car</Title>
      <Input placeholder="Your car number" onChange={onChange} value={carNumber} />
      <Button type="primary" onClick={onClick} disabled={!carNumber}>
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
