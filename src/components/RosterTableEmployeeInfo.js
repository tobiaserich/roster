import React from "react";
import styled from "@emotion/styled";

const GridContainer = styled("div")`
  width: 100px;
  height: 100%;
  background-color: transparent;
  padding-left: 5px;
  padding-top: 3px;
  padding-right: 20px;
  ${"" /* display: grid; */}
  ${"" /* grid-template-columns: 1fr 1fr; */}
  ${"" /* grid-template-rows: 1fr 1fr 1fr; */}
`;

const SurName = styled("div")`
  font-size: 15px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  text-align: center;
`;
const FirstName = styled("div")`
  font-size: 15px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  text-align: center;
`;

// const Status = styled("div")`
//   grid-column-start: 1;
//   font-size: 15px;
//   grid-column-end: 2;
//   grid-row-start: 3;
//   text-align: center;
// `;

// const WorkingHours = styled("div")`
//   grid-column-start: 2;
//   grid-column-end: 3;
//   grid-row-start: 3;
//   text-align: center;
//   font-size: 15px;
// `;

const RosterTableEmployeeInfo = ({ employeeName }) => {
  const name = employeeName.split(",");
  return (
    <GridContainer>
      <SurName>{name?.[0]?.trim()}</SurName>
      <FirstName>{name?.[1]?.trim()}</FirstName>
    </GridContainer>
  );
};

export default RosterTableEmployeeInfo;
