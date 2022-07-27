import React from "react";
import styled from "@emotion/styled";

const Row = styled("div")`
  position: relative;
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
  background-color: ${({ bgColor }) => `#${bgColor}`};
  height: 60px;
  min-width: 25px;
  max-width: 25px;
  border-radius: 50px;
  overflow: hidden;
  box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
    -0.5px 0px 0.5px rgba(0, 0, 0, 0.25), inset 0px 1px 2px rgba(0, 0, 0, 0.25);
`;

const TopText = styled("div")`
  font-size: 12px;
  line-height: 80%;
`;
const SubText = styled("div")`
  font-size: 8px;
  line-height: 80%;
`;

const Content = styled("div")`
  text-align: center;
`;

const RosterTableColumn = ({ value, color }) => {
  const [startAnimation, setStartAnimation] = React.useState(false);

  return (
    <Row
      onClick={() => {
        setStartAnimation(!startAnimation);
      }}
      bgColor={color}
    >
      <Content>
        <TopText>{value?.date || ""}</TopText>
      </Content>
      <Content>
        <TopText>{value?.top || ""}</TopText>
        <SubText>{value?.sub || ""}</SubText>
      </Content>
    </Row>
  );
};

export default RosterTableColumn;
