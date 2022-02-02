import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisitCard from "./visit-card";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="visit-card" element={<VisitCard />}>
        </Route>
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <p>404 Not found...!</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.querySelector("#root")
);
