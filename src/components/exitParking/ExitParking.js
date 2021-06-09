import React, { useState } from "react";
import { Typography, Button, Select, message } from "antd";
import PropTypes from "prop-types";
import moment from "moment";

import * as S from "./styled";
import { FIRST_HOUR_RATE, DEFAULT_HOUR_RATE } from "../../constants";

const { Title } = Typography;

const getSummary = (startTime) => {
  const parkedTimeInMinutes = moment.duration(
    moment().add(0, "minutes").diff(startTime, "minutes")
  );
  const hoursParkedTime = Math.floor(parkedTimeInMinutes / 60);
  const minutesParkedTime = parkedTimeInMinutes % 60;
  const sumToPay =
    (hoursParkedTime || minutesParkedTime ? 1 : 0) * FIRST_HOUR_RATE +
    ((hoursParkedTime || 1) - 1) * DEFAULT_HOUR_RATE +
    (hoursParkedTime && minutesParkedTime ? 1 : 0) * DEFAULT_HOUR_RATE;
  return { hoursParkedTime, minutesParkedTime, sumToPay };
};

const getSummaryMessage = (carNumber, hoursParkedTime, minutesParkedTime, sumToPay) =>
  `${
    hoursParkedTime || minutesParkedTime
      ? `Your vehicle ${carNumber} has stayed for ${
          hoursParkedTime ? `${hoursParkedTime} hours ` : ""
        } ${hoursParkedTime && minutesParkedTime ? "and " : ""} ${
          minutesParkedTime ? `${minutesParkedTime} minutes ` : ""
        }and you have to pay ${sumToPay} RON.`
      : "You haven't stayed enough to pay."
  }`;

// 0 h 0 min => 0 => 0*10 + 0*5 + 0*5
// 0 h 10 min => 10 => 1*10 + 0*5 + 0*5
// 1 h 0 min=> 10 => 1*10 + 0*5 + 0*5
// 1 h 10 min => 10 + 5 => 1*10 + 0*5 + 1*5
// 2 h 0 min=> 10 + 5 => 1*10 + 1*5 + 0*5
// 2 h 10 min => 10 + 5 + 5 => 1*10 + 1*5 + 1*5
// 3 h 0 min=> 10 + 5 + 5 => 1*10 + 2*5 + 0*5
// 3 h 10 min => 10 + 5 + 5 + 5 => 1*10 + 2*5 + 1*5
// 4 h 0 min=> 10 + 5 + 5 + 5 => 1*10 + 3*5 + 0*5

const ExitParking = ({ parkedCars = [], setParkedCars }) => {
  const [carNumber, setCarNumber] = useState("");

  const onChange = (value) => setCarNumber(value);

  const onClick = () => {
    const carToExit = parkedCars.find(({ carNumber: number }) => carNumber === number);

    const { hoursParkedTime, minutesParkedTime, sumToPay } = getSummary(
      carToExit.startTime
    );

    setParkedCars(parkedCars.filter(({ carNumber: number }) => carNumber !== number));

    message.info(
      getSummaryMessage(carToExit.carNumber, hoursParkedTime, minutesParkedTime, sumToPay)
    );
  };

  return (
    <S.ExitParkingWrapper>
      <Title level={3}>Exit parking</Title>
      <Select onChange={onChange} placeholder="Choose your car number">
        {parkedCars.map(({ carNumber }) => (
          <Select.Option key={carNumber} value={carNumber}>
            {carNumber}
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={onClick}>
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
