import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const x = "Ian";
  return <h1>Hello {`${0}`} MOTO</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
