import styled from "styled-components";
import { Typography } from "antd";

export const AvailableSpotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvailableSpotsNumber = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #1890ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AvailableSpotsText = styled(Typography.Text)`
  color: white;
  font-size: 20px;
`;
