import React, { useId } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "@stylesheets/main.scss";

import { portfolioRoutes, ErrorNotFound } from "@components/pages/Portfolio";
/**
 *  Main entry, but don't modify links here, all goes in the portfolio component pages from portfolioroutes.
 * @returns void
 */
const App = () => {
  const id = useId();// // map through portfolioRoutes to build all portfolio routes
  const routeComponents = portfolioRoutes.map(({ path, element }, key) => {
    return <Route path={path} element={element} key={`${key}${id}`} />;
  });

  return (
    <BrowserRouter>
      <Routes>
        {routeComponents}
        <Route path="*" element={<ErrorNotFound />} key={`ErrorNotFound${useId()}`} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
