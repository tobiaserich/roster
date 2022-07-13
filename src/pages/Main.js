import React from "react";
import Header from "../components/Header";
import getRoster from "../helper/getRoster";

const Main = () => {
  const [singlePage, setSinglePage] = React.useState();

  React.useEffect(() => {
    const allPages = async () => {
      const result = await getRoster();
      setSinglePage(result);
    };
    allPages();
  }, []);

  return (
    <>
      <Header cluster={singlePage?.cluster}></Header>
    </>
  );
};

export default Main;
