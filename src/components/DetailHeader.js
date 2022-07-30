import React from "react";
import styled from "@emotion/styled";
import SwitchMenu from "./SwitchMenu";
import { PageContext } from "../App";
import backImage from "../assets/img/backButton.svg";
import settingsImage from "../assets/img/settings.svg";
import Button from "./Button";
import PopUpMenu from "./PopUpMenu";

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

const Header = ({ changeMenu }) => {
  const context = React.useContext(PageContext);
  return (
    <Container>
      <Button
        pos="left"
        onClick={() => context.setPage("main")}
        image={backImage}
      />
      <Name>{context.employeeData.name.replace(/,/g, " ")}</Name>
      <SwitchMenu forPage="employeeDetail" changeMenu={changeMenu} />
      <Button pos="right" onClick={() => {}} image={settingsImage} />
    </Container>
  );
};

export default Header;
