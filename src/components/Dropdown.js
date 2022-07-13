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
  ${({ status }) =>
    status === false
      ? { maxHeight: "40px" }
      : "overflow: scroll;scrollbar-width:thin;max-height:240px;"};
  border: 1px solid black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: #d9d9d9;
  > {
    :after {
      display: inline-block;
      content: "";
      width: 20px;
    }
  }
`;

const Image = styled("img")`
  position: absolute;
  right: 5px;
  bottom: 47%;
`;

const Item = styled("div")`
  position: relative;

  ::before {
    display: inline-block;
    content: "";
    width: 5px;
  }
`;

const Dropdown = ({ cluster }) => {
  const [status, setStatus] = React.useState(false);
  const [currentCluster, setCurrentCluster] = React.useState(cluster[0]);
  const handleStatus = (e) => {
    e.currentTarget.scroll(0, 0);
    setStatus(!status);
  };

  const handleClusterChange = (e) => {
    setCurrentCluster(e.currentTarget.innerText);
  };
  return (
    <>
      <DropdownContainer status={status} onClick={handleStatus}>
        {[currentCluster, ...cluster]?.map((item, index) => {
          if (index === 0) {
            return (
              <>
                <Item>
                  {item}
                  <Image src={ArrowDown} />
                </Item>
              </>
            );
          } else {
            return <Item onClick={handleClusterChange}>{item}</Item>;
          }
        })}
      </DropdownContainer>
    </>
  );
};

export default Dropdown;
