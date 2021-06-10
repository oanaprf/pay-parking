import styled from "styled-components";
import { List as AntdList } from "antd";

export const ParkedCarsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ListItem = styled.div`
  padding: 5px;
  color: #0c4880;
`;

export const List = styled(AntdList)`
  align-self: center;
`;
