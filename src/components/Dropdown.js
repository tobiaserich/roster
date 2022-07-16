import styled from "@emotion/styled";
import React from "react";
import ArrowDown from "../assets/img/ArrowDown.svg";

const DropdownContainer = styled("div")`
  color: black;
  display: inline-flex;
  font-family: "Arima Madurai";
  font-size: 30px;
  flex-direction: column;
  overflow: hidden;
  margin: 0 3px;
  margin-top: 2px;
  position: absolute;
  z-index: 10;
  min-height: 40px;
  ${({ status }) =>
    status === false
      ? { maxHeight: "40px" }
      : {
          overflowY: "scroll",
          scrollbarWidth: "thin",
          maxHeight: "240px",
          marginLeft: "11px",
        }};

  background: #ffe6cc;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  > {
    :after {
      display: inline-block;
      content: "";
      width: 30px;
    }
    :before {
      display: inline-block;
      content: "";
      width: 10px;
    }
  }
`;

const Image = styled("img")`
  position: absolute;
  right: 5px;
  bottom: 47%;
  padding-right: 10px;
`;

const Item = styled("div")`
  position: relative;

  ::before {
    display: inline-block;
    content: "";
    width: 5px;
  }
`;

const Dropdown = ({ cluster, changeCluster }) => {
  const [status, setStatus] = React.useState(false);
  const [currentCluster, setCurrentCluster] = React.useState();
  const handleStatus = (e) => {
    e.currentTarget.scroll(0, 0);
    setStatus(!status);
  };

  React.useEffect(() => {
    setCurrentCluster(cluster?.[0]);
  }, [cluster]);

  const handleClusterChange = (e) => {
    changeCluster(e.currentTarget.innerText);
  };
  return (
    <>
      <DropdownContainer status={status} onClick={handleStatus}>
        {cluster?.map((item, index) => {
          if (index === 0) {
            return (
              <React.Fragment key={item + index}>
                <Item>
                  {item}
                  <Image src={ArrowDown} />
                </Item>
              </React.Fragment>
            );
          } else {
            return (
              <Item key={item + index} onClick={handleClusterChange}>
                {item}
              </Item>
            );
          }
        })}
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
