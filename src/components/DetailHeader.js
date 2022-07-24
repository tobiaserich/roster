import React from "react";
import styled from "@emotion/styled";
import SwitchMenu from "./SwitchMenu";
import { PageContext } from "../App";
const Container = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffebd6;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
`;

const Name = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  font-size: 30px;
  margin-bottom: -50px;
`;

const Header = () => {
  const context = React.useContext(PageContext);

  return (
    <Container>
      <Name>{context.employeeData.name.replace(/,/g, " ")}</Name>
      <SwitchMenu forPage="employeeDetail" />
    </Container>
  );
};

export default Header;
