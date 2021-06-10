import styled from "styled-components";
import { Typography } from "antd";

import theme from "../../theme";

export const AvailableSpotsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  margin-top: 40px;
`;

export const AvailableSpotsCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const AvailableSpotsText = styled(Typography.Text)`
  color: ${theme.white};
  font-size: 3em;
  font-weight: bold;
  margin-left: -2px;
  margin-top: -4px;
`;
