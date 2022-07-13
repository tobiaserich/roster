import React from "react";
import styled from "@emotion/styled";
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

const Header = ({ cluster }) => {
  return (
    <Container>
      <Dropdown cluster={cluster} />
    </Container>
  );
};

export default Header;
