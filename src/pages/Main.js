import React from "react";
import getRoster from "../helper/getRoster";

const Main = () => {
  const [singlePage, setSinglePage] = React.useState();

  React.useEffect(() => {
    const allPages = async () => {
      const result = await getRoster();
      console.log(result);
      setSinglePage(result);
    };
    allPages();
  }, []);

  return <>{singlePage?.map((item) => item)}</>;
};

export default Main;
