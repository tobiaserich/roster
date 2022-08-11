import React from "react";

const PageContext = React.createContext();

const PageProvider = (props) => {
  const [page, setPage] = React.useState("main");
  const [allData, setAllData] = React.useState("");
  const [employeeData, setEmployeeData] = React.useState("main");
  const [currentCluster, setCurrentCluster] = React.useState("");

  const openEmployeeDetailPage = (employee) => {
    setEmployeeData(employee);
    setPage("employeeDetail");
  };

  return (
    <PageContext.Provider
      value={{
        page,
        setPage,
        openEmployeeDetailPage,
        employeeData,
        currentCluster,
        setCurrentCluster,
        allData,
        setAllData,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

export { PageContext, PageProvider };
