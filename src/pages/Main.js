import React from "react";
import Header from "../components/Header";
// import getRoster from "../helper/getRoster";
import Rosters from "../components/Rosters";
import { PageContext } from "../App";
import PopUpMenu from "../components/PopUpMenu";
import { db } from "../helper/db";
import ChooseMonth from "../components/ChooseMonth";

const Main = () => {
  const context = React.useContext(PageContext);
  const [settingsVisible, setSettingsVisible] = React.useState(false);
  const [data, setData] = React.useState("");
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
  const changeCurrentCluster = (clusterName) => {
    context.setCurrentCluster(clusterName);
  };

  const changeSettingsVisibility = (e, input) => {
    if (input) {
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
      indexTable.sort((a, b) =>
        months.indexOf(a.month) > months.indexOf(b.month) ? +1 : -1
      );

      if (indexTable.length > 0 && context.allData === "") {
        const allFiles = await db.data
          .where({ month: indexTable.at(-1).month })
          .toArray();
        if (data === "" && context.allData === "") {
          context.setAllData(allFiles.at(-1).data);
          if (context.currentCluster === "") {
            context.setCurrentCluster(allFiles.at(-1).data.cluster[0]);
          }
          return;
        }
      }

      if (context.allData === "" || settingsVisible) {
        const getRoster = await import("../helper/getRoster");
        console.log(getRoster);
        const result = await getRoster.default(data);
        context.setAllData(result);
        const searchInIndex = indexTable.find(
          (entry) => entry.month === result.month && entry.year === result.year
        );
        if (searchInIndex === undefined) {
          await db.files.add({ month: result.month, year: result.year });
          db.data.add({ month: result.month, year: result.year, data: result });
        }

        if (context.currentCluster === "") {
          context.setCurrentCluster(result.cluster[0]);
        }
      }
    };

    allPages();
  }, [data]);

  const employeesInCurrentCluster = () => {
    return context?.allData?.employee?.filter(
      (employee) => employee.cluster === context.currentCluster
    );
  };
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
        openSettings={(e) => changeSettingsVisibility(e, true)}
      ></Header>

      <ChooseMonth />

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
