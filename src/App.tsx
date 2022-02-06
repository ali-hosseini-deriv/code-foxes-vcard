import * as React from "react";
import Container from "@mui/material/Container";
import QrCodeForm from "./qr-code-form";

import {Stack} from "@mui/material";
import Header from "./components/header/header";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({

  center:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  }
}));


export default function App() {
    const styles = useStyles();

    return (
        <Container maxWidth={false} disableGutters>
            <Stack>
                <Header/>
              <div className={styles.center}>
                <QrCodeForm/>
              </div>
            </Stack>
        </Container>
    );
}
