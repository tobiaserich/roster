import React from "react";
import styled from "@emotion/styled";

const Container = styled("div")`
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3000;
`;

const PopUp = styled("div")`
  position: absolute;
  width: 340px;
  height: 500px;
  left: 0;
  right: 0;
  top: 150px;
  margin: auto;
  background-color: #ffebd6;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

const PopUpMenu = ({ closeSettings, setFile }) => {
  const uploadData = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => setFile(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <Container onClick={closeSettings}>
      <PopUp>
        <input
          type="file"
          onChange={(e) => {
            uploadData(e);
          }}
        />
      </PopUp>
    </Container>
  );
};

export default PopUpMenu;
