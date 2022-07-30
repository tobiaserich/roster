import React from "react";
import styled from "@emotion/styled";
import SwitchMenu from "./SwitchMenu";
import { PageContext } from "../App";
import backImage from "../assets/img/backButton.svg";
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

const BackButton = styled("div")`
  height: 30px;
  width: 30px;
  position: absolute;
  left: 5px;
  background-image: url(${backImage});
  background-repeat: space;
  background-position: 3px 3px;
  box-shadow: 4px 4px 4px rgba(144, 144, 144, 0.1),
    -1px -4px 4px rgba(255, 255, 255, 0.26);
  border-radius: 9px;
  transition: all 0.1s ease;
  :active {
    background-color: #ffdebd;
    box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
      -0.5px 0px 0.5px rgba(0, 0, 0, 0.25),
      inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

const Header = ({ changeMenu }) => {
  const context = React.useContext(PageContext);

  return (
    <Container>
      <BackButton onClick={() => context.setPage("main")} />
      <Name>{context.employeeData.name.replace(/,/g, " ")}</Name>
      <SwitchMenu forPage="employeeDetail" changeMenu={changeMenu} />
    </Container>
  );
};

export default Header;
