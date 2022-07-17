import React from "react";
import { PageContext, PageProvider } from "./context/pageContext";
import GlobalStyles from "./GlobalStyles";
import Main from "./pages/Main";
import EmployeeDetail from "./pages/EmployeeDetail";
const App = () => {
  const context = React.useContext(PageContext);
  return (
    <PageProvider>
      <GlobalStyles />
      <PageContext.Consumer>
        {({ page }) =>
          page === "main" ? (
            <Main />
          ) : page === "employeeDetail" ? (
            <EmployeeDetail />
          ) : (
            ""
          )
        }
      </PageContext.Consumer>
    </PageProvider>
  );
};
export { PageContext };
export default App;
