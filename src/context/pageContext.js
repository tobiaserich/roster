import React from "react";

const PageContext = React.createContext();

const PageProvider = (props) => {
  const [page, setPage] = React.useState("main");
  const [employeeData, setEmployeeData] = React.useState("main");

  const openEmployeeDetailPage = (employee) => {
    setEmployeeData(employee);
    setPage("employeeDetail");
  };

  return (
    <PageContext.Provider
      value={{ page, setPage, openEmployeeDetailPage, employeeData }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
