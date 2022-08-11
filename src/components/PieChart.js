import React from "react";
import styled from "@emotion/styled";
import { PageContext } from "../App";

const Container = styled("div")`
  width: 150px;
  height: 150px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #ffebd6;
  box-shadow: 4px 4px 4px rgba(144, 144, 144, 0.1),
    -1px -4px 4px rgba(255, 255, 255, 0.26);
`;

const Pie = styled("div")`
  position: relative;
  width: 130px;
  aspect-ratio: 1;
  display: inline-grid;
  place-content: center;
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;

  :before {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: 0;
    background: ${({ percentage }) =>
      `conic-gradient(rgba(0, 180, 140, 0.5) calc(${percentage} * 1%), #0000 0)`};
    box-shadow: inset 0px 1px 8px rgba(0, 0, 0, 0.18);
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 10px),
      #000 calc(100% - 10px)
    );
    animation: pieAnimation 0.7s ease-in both;
    @keyframes pieAnimation {
      ${(ani) => ani}
    }
  }
`;

const PieChart = () => {
  const context = React.useContext(PageContext);
  const employmentScope = context.employeeData.title.split("-");

  const calcWorkingHours = () => {
    const data = context.employeeData.firstLine;
    let hoursToWork = 0;
    let workedHours = 0;
    data.map((d, index) => {
      const day = new Date(
        `${context.employeeData.month} ${index + 1}, ${
          context.employeeData.year
        }`
      ).getDay();
      if (day === 0 || day === 6) {
        if (d.str !== "---" && d.str !== "x!" && d.str !== "x") {
          workedHours = workedHours + 7.33;
        }
        return;
      }
      if (d.str !== "x!" && d.str !== "x") {
        workedHours = workedHours + 7.33;
      }
      hoursToWork = hoursToWork + 7.33;
    });
    return { workedHours, hoursToWork };
  };

  const workingHours = calcWorkingHours();
  const perc = Math.ceil(
    workingHours["workedHours"] /
      ((workingHours["hoursToWork"] *
        parseFloat(employmentScope[1].replace(",", "."))) /
        100)
  );

  const animation = new Array(100)
    .fill("")
    .map(
      (e, i) =>
        `${i}%{background: conic-gradient(rgba(0, 180, 140, 0.5) ${
          (perc / 100) * i
        }%, #0000 0);}`
    );

  const animationText = animation.toString();
  return (
    <Container>
      <Pie ani={animationText} percentage={perc}>
        {perc}%
      </Pie>
    </Container>
  );
};

export default PieChart;
