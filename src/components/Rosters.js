import styled from "@emotion/styled";
import React from "react";
import RosterTableContainer from "./RosterTableContainer";
import RosterTableEmployeeInfo from "./RosterTableEmployeeInfo";
import RosterTableColumn from "./RosterTableColumn";

const Container = styled("main")`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  margin-bottom: 20px;
  margin-right: 30px;
  width: fit-content;
`;
const Rosters = ({ employeeList }) => {
  const months = {
    Januar: "January",
    Februar: "February",
    März: "March",
    April: "April",
    Mai: "May",
    Juni: "June",
    Juli: "July",
    August: "August",
    September: "September",
    Oktober: "October",
    November: "November",
    Dezember: "December",
  };

  return (
    <Container>
      {employeeList?.employees?.map((employee) => (
        <RosterTableContainer>
          <RosterTableEmployeeInfo employeeName={employee.name} />
          {employee.firstLine.map((entry, index) => {
            const dates = new Date(
              ` ${months[employeeList.month]} ${index + 1},${employeeList.year}`
            );
            const weekday = dates.getDay();
            const color =
              weekday === 0 || weekday === 6
                ? "FFCC99"
                : weekday === 2 || weekday === 4
                ? "FFDEBD"
                : "FFEBD6";

            const findSecondLineItem = employee.secondLine.find(
              (anotherEntry) =>
                anotherEntry.transform[4] >= entry.transform[4] &&
                anotherEntry.transform[4] <
                  employee.firstLine?.[index + 1]?.transform[4]
            );
            return (
              <RosterTableColumn
                color={color}
                value={{
                  date: index + 1,
                  top: entry.str,
                  sub: findSecondLineItem?.str,
                }}
              />
            );
          })}
        </RosterTableContainer>
      ))}
    </Container>
  );
};

export default Rosters;
