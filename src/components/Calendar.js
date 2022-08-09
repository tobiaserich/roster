import React from "react";
import styled from "@emotion/styled";
import { PageContext } from "../App";

const Container = styled("div")`
  height: 100%;
  width: 100%;
  margin-top: 60px;
`;

const Body = styled("div")`
  color: black;
  height: 100%;
  border-radius: 0 0 40px 20px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 50px 50px 50px 50px 50px 50px 50px;
  row-gap: 5px;
`;

const DayName = styled("div")`
  width: 38px;
  max-height: 25px;
  padding-top: 3px;
  text-align: center;
  background: #ffe6cc;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: auto;
`;

const CalendarDay = styled("div")`
  width: 35px;
  height: 50px;
  margin: auto;
  background: #ffebd6;
  box-shadow: 0px 1px 2px rgba(171, 166, 156, 0.24),
    -1px -1px 2px rgba(255, 255, 255, 0.3),
    inset -1px -1px 2px rgba(197, 193, 190, 0.43),
    inset 0px 1px 2px rgba(255, 255, 255, 0.44);
`;

const DateBox = styled("div")`
  text-align: center;
  margin-top: 5px;
`;

const Shift = styled("div")`
  text-align: center;
  font-size: 13px;
  margin-top: 3px;
`;
const Calendar = () => {
  const context = React.useContext(PageContext);
  const firstDayOfMonth = () => {
    const value = new Date(
      `${context.employeeData.month} 1, ${context.employeeData.year}`
    ).getDay();
    const spacer = value === 0 ? 6 : value - 1;
    return spacer;
  };
  return (
    <Container>
      <Body>
        <DayName>Mo</DayName>
        <DayName>Tu</DayName>
        <DayName>We</DayName>
        <DayName>Th</DayName>
        <DayName>Fr</DayName>
        <DayName>Sa</DayName>
        <DayName>Su</DayName>
        {!isNaN(firstDayOfMonth())
          ? new Array(firstDayOfMonth()).fill("").map(() => <div></div>)
          : ""}
        {context.employeeData.firstLine.map((item, index) => {
          return (
            <CalendarDay key={item.str + index}>
              <DateBox key={item.str + index + "box"}>{index + 1}</DateBox>
              <Shift key={item.str + index + "shift"}>{item.str}</Shift>
            </CalendarDay>
          );
        })}
      </Body>
    </Container>
  );
};

export default Calendar;
