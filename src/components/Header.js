import React from "react";
import styled from "@emotion/styled";
import SwitchMenu from "./SwitchMenu";
import Dropdown from "./Dropdown";

const Container = styled("div")`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  background-color: #ffebd6;
  position: relative;
  z-index: 2000;
`;

const Header = ({ cluster, changeCluster }) => {
  return (
    <Container>
      <Dropdown cluster={cluster} />
      <SwitchMenu />
    </Container>
  );
};

export default Header;
