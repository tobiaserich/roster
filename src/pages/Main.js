import React from "react";
import Header from "../components/Header";
import getRoster from "../helper/getRoster";
import Rosters from "../components/Rosters";
import { PageContext } from "../App";

const Main = () => {
  const context = React.useContext(PageContext);
  const changeCurrentCluster = (clusterName) => {
    context.setCurrentCluster(clusterName);
  };

  React.useEffect(() => {
    const allPages = async () => {
      const result = await getRoster();
      context.setAllData(result);
      if (context.currentCluster === "") {
        context.setCurrentCluster(result.cluster[0]);
      }
    };

    context.allData || allPages();
  }, []);

  const employeesInCurrentCluster = () =>
    context.allData?.employee.filter(
      (employee) => employee.cluster === context.currentCluster
    );

  return context.allData ? (
    <>
      <Header
        cluster={[context.currentCluster, ...context.allData.cluster]}
        changeCluster={changeCurrentCluster}
      ></Header>

      <Rosters
        employeeList={{
          employees: employeesInCurrentCluster(),
          year: context.allData.year,
          month: context.allData.month,
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default Main;
