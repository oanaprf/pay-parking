import React, { useState } from "react";
import "antd/dist/antd.css";

import { AvailableSpots, ParkCar, ExitParking, ParkedCars } from "./components";
import * as S from "./styled";

const App = () => {
  const [parkedCars, setParkedCars] = useState([]);
  return (
    <S.AppWrapper>
      <S.FlexWrapper>
        <AvailableSpots parkedCars={parkedCars} />
        <ParkedCars parkedCars={parkedCars} />
      </S.FlexWrapper>
      <S.FlexWrapper>
        <ParkCar {...{ parkedCars, setParkedCars }} />
        <ExitParking {...{ parkedCars, setParkedCars }} />
      </S.FlexWrapper>
    </S.AppWrapper>
  );
};

export default App;
