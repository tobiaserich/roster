import React from "react";
import Header from "../components/Header";
import getRoster from "../helper/getRoster";
import Rosters from "../components/Rosters";
import { PageContext } from "../App";
import PopUpMenu from "../components/PopUpMenu";
import { db } from "../helper/db";
import { useLiveQuery } from "dexie-react-hooks";

const Main = () => {
  const context = React.useContext(PageContext);
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const [data, setData] = React.useState("");
  const changeCurrentCluster = (clusterName) => {
    context.setCurrentCluster(clusterName);
  };

  const changeSettingsVisibility = (e, input) => {
    if (input === true) {
      e.currentTarget.parentElement.parentElement.scroll(0, 0);
      setSettingsVisible(input);
    }

    if (!input) {
      if (e.target === e.currentTarget) {
        setSettingsVisible(false);
      }
    }
  };

  React.useEffect(() => {
    const allPages = async () => {
      const indexTable = await db.files.toArray();
      const allFiles = await db.data.toArray();
      if (data === "") {
        return;
      }
      const result = await getRoster(data);
      context.setAllData(result);
      console.log(indexTable);
      console.log(allFiles);
      const searchInIndex = indexTable.find(
        (entry) => entry.month === result.month && entry.year === result.year
      );
      if (searchInIndex === undefined) {
        db.files.add({ month: result.month, year: result.year });
        db.data.add({ month: result.month, year: result.year, data: result });
      }

      if (context.currentCluster === "") {
        context.setCurrentCluster(result.cluster[0]);
      }
    };

    allPages();
  }, [data]);

  const employeesInCurrentCluster = () =>
    context.allData?.employee?.filter(
      (employee) => employee.cluster === context.currentCluster
    );

  return (
    <>
      {settingsVisible ? (
        <PopUpMenu
          closeSettings={(e) => changeSettingsVisibility(e, false)}
          setFile={setData}
        />
      ) : (
        ""
      )}
      <Header
        cluster={[
          context?.currentCluster,
          ...(context?.allData?.cluster ?? ""),
        ]}
        changeCluster={changeCurrentCluster}
        openSettings={(e) => changeSettingsVisibility(e, !settingsVisible)}
      ></Header>

      <Rosters
        employeeList={{
          employees: employeesInCurrentCluster(),
          year: context.allData.year,
          month: context.allData.month,
        }}
        disableScrollX={settingsVisible}
      />
    </>
  );
};

export default Main;
