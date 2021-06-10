import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4faff;
`;

export const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Body = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;
