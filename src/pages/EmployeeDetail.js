import React from "react";
import DetailHeader from "../components/DetailHeader";
import Calendar from "../components/Calendar";
import EmployeeStatistic from "../components/EmployeeStatistic";

const EmployeeDetail = () => {
  const [activeMenu, setActiveMenu] = React.useState("calendar");

  const changeMenu = (value) => {
    const menu = value === "left" ? "calendar" : "statistic";
    setActiveMenu(menu);
  };
  return (
    <>
      <DetailHeader changeMenu={changeMenu} />
      {activeMenu === "calendar" ? <Calendar /> : <EmployeeStatistic />}
    </>
  );
};

export default EmployeeDetail;
