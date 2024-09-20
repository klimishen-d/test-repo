import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { tryLoadAndStartRecorder } from "@alwaysmeticulous/recorder-loader";

async function startApp() {
  // Record all sessions on localhost, staging stacks and preview URLs
  if (!isProduction()) {
    // Start the Meticulous recorder before you initialise your app.
    // Note: all errors are caught and logged, so no need to surround with try/catch
    await tryLoadAndStartRecorder({
      recordingToken: "DDZM829XEgfFROwax35MMtvlGZA0nbXJFmFbadPb",
      isProduction: false,
    });
  }

  // Initalise app after the Meticulous recorder is ready, e.g.
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

function isProduction() {
  // TODO: Update me with your production hostname
  return window.location.hostname.indexOf("your-production-site.com") > -1;
}

startApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
