import React, { useState } from "react";
import "antd/dist/antd.css";

import {
  Title,
  AvailableSpots,
  ParkCar,
  ExitParking,
  ParkedCars,
  Menu,
} from "./components";
import * as S from "./styled";

const menuItems = ["Park your car", "Exit parking", "View parked cars"];
const components = [
  ({ parkedCars, setParkedCars }) => <ParkCar {...{ parkedCars, setParkedCars }} />,
  ({ parkedCars, setParkedCars }) => <ExitParking {...{ parkedCars, setParkedCars }} />,
  ({ parkedCars }) => <ParkedCars {...{ parkedCars }} />,
];

const App = () => {
  const [parkedCars, setParkedCars] = useState([]);
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  return (
    <S.AppWrapper>
      <S.Header>
        <Title />
        <AvailableSpots parkedCars={parkedCars} />
      </S.Header>
      <S.Body>
        <Menu {...{ menuItems, selectedMenuItem, setSelectedMenuItem }} />
        <S.CardView>
          {components[selectedMenuItem]({ parkedCars, setParkedCars })}
        </S.CardView>
      </S.Body>
    </S.AppWrapper>
  );
};

export default App;
