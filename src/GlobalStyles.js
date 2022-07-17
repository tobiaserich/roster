import React from "react";
import { Global, css } from "@emotion/react";

function GlobalStyles() {
  return (
    <Global
      styles={() => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "roboto", "sans-serif";
          background-color:black;
          height:100vh;
        }
        #root {
          position:relative;
          margin:auto;
          height:100%;
          max-width: 500px;
          background-color:#FFEBD6;
          overflow-x:scroll;
        }
      }
      `}
    />
  );
}

export default GlobalStyles;
