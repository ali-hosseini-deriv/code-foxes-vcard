import * as React from "react";
import Container from "@mui/material/Container";
import QrCodeForm from "./qr-code-form";

import { Stack } from "@mui/material";
import Header from "./components/header/header";
import { makeStyles } from "@mui/styles";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import VisitCard from './visit-card';

const useStyles = makeStyles(() => ({
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
}));

export default function App() {
  const styles = useStyles();

  return (
    <Container maxWidth={false} disableGutters>
      <Stack>
        <Header />
        <div className={styles.center}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<QrCodeForm />} />
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
        </div>
      </Stack>
    </Container>
  );
}
