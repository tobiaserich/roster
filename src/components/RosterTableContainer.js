import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-family: roboto;
  min-height: 70px;
  background-color: #ffebd6;
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  box-shadow: 0px 5px 9px rgba(213, 210, 208, 0.59),
    inset 4px 5px 15px rgba(255, 255, 255, 0.34),
    inset 0px -2px 8px rgba(213, 210, 208, 0.5);
  border-radius: 5px;
`;

const RosterTableContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default RosterTableContainer;
