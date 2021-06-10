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

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding: 50px 50px;
`;

export const CardView = styled.div`
  background-color: white;
  border-radius: 5px;
  flex-grow: 0.3;
  margin: 30px 0;
  padding: 30px 40px;
  width: 27%;
  box-shadow: rgba(0, 0, 0, 0.01) 10px 10px 10px;
`;
