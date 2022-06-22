import React, { Suspense } from "react";
// For client createRoot or hydrateRoot
import * as ReactDOMClient from "react-dom/client";

import App from "@app/App";
import "./i18n";

const dRoot = document.querySelector("#app");
// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file

// Be sure eleemebt exist before use it as a document root
if (dRoot) {
  const root = ReactDOMClient.createRoot(dRoot);

  // 👇️ if you use TypeScript, add non-null (!) assertion operator
  // const root = createRoot(rootElement!);

  root.render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>,
  );
}
