import styled from "@emotion/styled";
import React from "react";

const Button = styled("div")`
  height: 30px;
  width: 30px;
  position: absolute;
  ${({ pos }) => {
    if (pos === "left") {
      return { left: "5px" };
    }
    if (pos === "right") {
      return { right: "5px" };
    }
  }};
  background-image: ${({ image }) => `url(${image}`});
  background-repeat: space;
  background-position: 3px 3px;
  box-shadow: 4px 4px 4px rgba(144, 144, 144, 0.1),
    -1px -4px 4px rgba(255, 255, 255, 0.26);
  border-radius: 9px;
  transition: all 0.1s ease;
  :active {
    background-color: #ffdebd;
    box-shadow: 0.5px 0px 0.3px rgba(255, 255, 255, 0.78),
      -0.5px 0px 0.5px rgba(0, 0, 0, 0.25),
      inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  }
`;

export default Button;
