import React from "react";
import Header from "../components/Header";
import getRoster from "../helper/getRoster";
import Rosters from "../components/Rosters";

const Main = () => {
  const [singlePage, setSinglePage] = React.useState();

  const [currentCluster, setCurrentCluster] = React.useState("");
  const [allCluster, setAllCluster] = React.useState("");

  const changeCurrentCluster = (clusterName) => {
    setCurrentCluster(clusterName);
  };

  React.useEffect(() => {
    const allPages = async () => {
      const result = await getRoster();
      setSinglePage(result);
      setAllCluster(result.cluster);
      setCurrentCluster(result.cluster[0]);
    };
    allPages();
  }, []);

  const employeesInCurrentCluster = () =>
    singlePage?.employee.filter(
      (employee) => employee.cluster === currentCluster
    );
  return (
    <>
      <Header
        cluster={[currentCluster, ...allCluster]}
        changeCluster={changeCurrentCluster}
      ></Header>

      <Rosters
        employeeList={{
          employees: employeesInCurrentCluster(),
          year: singlePage?.year,
          month: singlePage?.month,
        }}
      />
    </>
  );
};

export default Main;
