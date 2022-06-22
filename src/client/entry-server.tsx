import React, { Suspense } from "react";

import ReactDOMServer from "react-dom/server";
import App from "@app/App";
import "./i18n";


export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
  );
}
