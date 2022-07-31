import React from "react";
import styled from "@emotion/styled";
import SwitchMenu from "./SwitchMenu";
import Dropdown from "./Dropdown";
import Button from "./Button";
import settingsImage from "../assets/img/settings.svg";

const Container = styled("div")`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  background-color: #ffebd6;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2000;
`;

const Header = ({ cluster, changeCluster, openSettings }) => {
  return (
    <Container>
      <Dropdown cluster={cluster} changeCluster={changeCluster} />
      <SwitchMenu />
      <Button pos="right" onClick={openSettings} image={settingsImage} />
    </Container>
  );
};

export default Header;
