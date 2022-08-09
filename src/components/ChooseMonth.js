import React, { useContext } from "react";
import styled from "@emotion/styled";
// import Button from "./Button";
// import arrow from "../assets/img/arrow.svg";
import leftArrow from "../assets/img/leftArrow.svg";
import { db } from "../helper/db";
import { PageContext } from "../App";

const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  width: ${({ w }) => w}px;
`;

const Button = styled("span")`
  height: 35px;
  width: 35px;
  background-image: url(${leftArrow});
  ${({ dir }) => (dir === "right" ? { transform: "scale(-1,1)" } : "")}
`;
const ChooseMonth = () => {
  const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  const [width, setWidth] = React.useState(0);
  const [dbIndex, setDbIndex] = React.useState();
  const ref = React.useRef(null);
  const context = useContext(PageContext);

  React.useEffect(() => {
    const getDbIndex = async () => {
      const result = await db?.files.toArray();
      result
        .sort((a, b) =>
          months.indexOf(a.month) > months.indexOf(b.month) ? +1 : -1
        )
        .sort((a, b) => (a.year > b.year ? +1 : -1));
      setDbIndex(result);
    };
    getDbIndex();
  }, []);

  const getPosInDb = () => {
    const pos = dbIndex?.findIndex(
      (entry) =>
        entry.month === context.allData.month &&
        entry.year === context.allData.year
    );

    return pos;
  };

  const changeDatasetInUse = async (dir) => {
    if (dir === "-") {
      const nextRoster = dbIndex[getPosInDb() - 1];
      const dataset = await db.data
        .where({ month: nextRoster.month, year: nextRoster.year })
        .toArray();
      context.setAllData(dataset[0].data);
    }
    if (dir === "+") {
      const nextRoster = dbIndex[getPosInDb() + 1];
      const dataset = await db.data
        .where({ month: nextRoster.month, year: nextRoster.year })
        .toArray();
      context.setAllData(dataset[0].data);
    }
  };

  React.useEffect(() => {
    setWidth(ref?.current?.parentElement?.offsetWidth);
  }, [ref]);

  return (
    <Container w={width}>
      {getPosInDb() > 0 ? (
        <Button dir="left" onClick={() => changeDatasetInUse("-")} />
      ) : (
        <></>
      )}
      {context.allData.month} {context.allData.year}
      {getPosInDb() < dbIndex?.length - 1 ? (
        <Button dir="right" onClick={() => changeDatasetInUse("+")} />
      ) : (
        <></>
      )}
    </Container>
  );
};

export default ChooseMonth;
