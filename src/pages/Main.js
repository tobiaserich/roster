import React from "react";
import Header from "../components/Header";
import getRoster from "../helper/getRoster";

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

  const employeesInCurrentCluster = singlePage?.employee.find(
    (employee) => employee.cluster === currentCluster
  );

  console.log(employeesInCurrentCluster);
  return (
    <>
      <Header
        cluster={[currentCluster, ...allCluster]}
        changeCluster={changeCurrentCluster}
      ></Header>
    </>
  );
};

export default Main;
