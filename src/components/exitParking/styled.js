import styled from "styled-components";
import { Button as AntdButton } from "antd";

export const ExitParkingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  flex-grow: 0.4;
`;

export const Button = styled(AntdButton)`
  align-self: flex-end;
`;
