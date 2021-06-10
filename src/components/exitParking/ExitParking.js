import React, { useState } from "react";
import { Typography, Button, Select, message } from "antd";
import PropTypes from "prop-types";

import * as S from "./styled";
import { getSummary, getSummaryMessage } from "../../utils";

const { Title } = Typography;

const ExitParking = ({ parkedCars = [], setParkedCars }) => {
  const [carNumber, setCarNumber] = useState("");

  const onChange = (value) => setCarNumber(value);

  const onClick = () => {
    const carToExit =
      parkedCars.find(({ carNumber: number }) => carNumber === number) || {};
    const { hoursParkedTime, minutesParkedTime, sumToPay } = getSummary(
      carToExit.startTime
    );

    setParkedCars(parkedCars.filter(({ carNumber: number }) => carNumber !== number));
    message.info(
      `${getSummaryMessage(
        carToExit.carNumber,
        hoursParkedTime,
        minutesParkedTime,
        sumToPay
      )} Have a nice day!`
    );
    setCarNumber("");
  };

  return (
    <S.ExitParkingWrapper>
      <Title level={3}>Exit parking</Title>
      <Select onChange={onChange} placeholder="Choose your car number" value={carNumber}>
        {parkedCars.map(({ carNumber }) => (
          <Select.Option key={carNumber} value={carNumber}>
            {carNumber}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={onClick} disabled={!carNumber}>
        Exit parking
      </Button>
    </S.ExitParkingWrapper>
  );
};

ExitParking.propTypes = {
  parkedCars: PropTypes.array.isRequired,
  setParkedCars: PropTypes.func.isRequired,
};

export default ExitParking;
