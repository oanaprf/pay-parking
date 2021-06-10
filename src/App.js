import React, { useState } from "react";
import "antd/dist/antd.css";

import { Title, AvailableSpots, ParkCar, ExitParking, ParkedCars } from "./components";
import * as S from "./styled";

const App = () => {
  const [parkedCars, setParkedCars] = useState([]);
  return (
    <S.AppWrapper>
      <S.Header>
        <Title />
        <AvailableSpots parkedCars={parkedCars} />
      </S.Header>
      {/* <S.FlexWrapper>
        <ParkedCars parkedCars={parkedCars} />
      </S.FlexWrapper> */}
      <S.Body>
        <S.FlexWrapper>
          <ParkCar {...{ parkedCars, setParkedCars }} />
          <ExitParking {...{ parkedCars, setParkedCars }} />
        </S.FlexWrapper>
      </S.Body>
    </S.AppWrapper>
  );
};

export default App;
