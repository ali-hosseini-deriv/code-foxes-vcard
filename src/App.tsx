import * as React from "react";
import Container from "@mui/material/Container";
import QrCodeForm from "./qr-code-form";

import { Grid, Stack } from "@mui/material";
import Header from "./components/header/header";

export default function App() {


  return (
    <Container maxWidth={false} disableGutters>
      <Stack>
        <Header />
      </Stack>
      <Stack>
        <Grid container spacing={2}>
          <Grid item md={3}></Grid>
          <Grid item md={6}>
            <QrCodeForm />
          </Grid>
          {/* <Grid item md={3}>
            <div dangerouslySetInnerHTML={{ __html: qr_image }} />
            <Link to='./visit-card' state= {data}>
              Generate visit card
            </Link>
          </Grid> */}
        </Grid>
      </Stack>
    </Container>
  );
}
