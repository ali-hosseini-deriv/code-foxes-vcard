import * as React from "react";
import Container from "@mui/material/Container";
import QrCodeForm from "./qr-code-form";

import { Grid, Stack } from "@mui/material";
import Header from "./components/header/header";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  body: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#fafafa",
  },
  gridStyle: {
    border: "1px solid #ebe9e9",
    borderRadius: "5px",
    padding: 30,
  },
  form: {
    padding: "30px",
    margin: "30px !important",

    // borderColor: "#ebe9e9",
  },
  centerElements: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 0,
    alignItems: "center",
  },
  qr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    "& img": {},
  },
  qrContainer: {
    padding: "30px",
    height: "100%",
    width: "100%",
  },
}));


export default function App() {
  const styles = useStyles();

  return (
    <Container maxWidth={false} disableGutters className={styles.body}>
      <Stack>
        <Header />
        <Grid className={`${styles.gridStyle} ${styles.form}`} item md={7} p={0}>
          <QrCodeForm />
        </Grid>
      </Stack>
    </Container>
  );
}
