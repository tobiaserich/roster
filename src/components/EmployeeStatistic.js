import React from "react";
import styled from "@emotion/styled";
import { PageContext } from "../App";

const Container = styled("div")`
  margin: auto;
  margin-top: 80px;
  width: 80%;
`;

const PercentageDisplay = styled("span")`
  margin-top: 5px;
`;
const BarContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; ;
`;
const Bar = styled("div")`
  width: ${({ compWidth }) => compWidth}px;
  min-height: 30px;
  margin-top: 10px;
  margin-left: 20px;
  background: #eb5757;
  opacity: 0.5;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 4px rgba(0, 0, 0, 0.18),
    3px 3px 4px rgba(144, 144, 144, 0.25),
    -3px -3px 15px rgba(255, 255, 255, 0.74);
  border-radius: 68px;
  border: 1.5px solid #ffebd6;
  animation: grow 1s ease both;
  transform-origin: left;
  padding-left: 10px;

  @keyframes grow {
    0% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;

const EmployeeStatistic = () => {
  const context = React.useContext(PageContext);
  const allSorted = {};
  const uniqueValues = [
    ...new Set(context.employeeData.firstLine.map((entry) => entry.str)),
  ];
  const percentageLength =
    window.innerWidth / (context.employeeData.firstLine.length - 1);

  const calcBars = () => {
    context.employeeData.firstLine.map((entry) => {
      const string = entry.str.replace(/x!/g, "x");
      allSorted[string] === undefined
        ? (allSorted[string] = 1)
        : allSorted[string]++;
    });
  };

  calcBars();

  uniqueValues.sort((a, b) => (allSorted[a] > allSorted[b] ? -1 : 1));
  return (
    <Container>
      {uniqueValues.map((value) => {
        if (value === "x!" || value === "x") {
          return;
        }
        return (
          <BarContainer>
            <Bar compWidth={percentageLength * allSorted[value]}>{value}</Bar>
            <PercentageDisplay>
              {Math.floor(
                (allSorted[value] /
                  (context.employeeData.firstLine.length - allSorted["x"])) *
                  100
              ) + " "}
              %
            </PercentageDisplay>
          </BarContainer>
        );
      })}
    </Container>
  );
};

export default EmployeeStatistic;
