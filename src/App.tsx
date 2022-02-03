import * as React from "react";
import Container from "@mui/material/Container";
import QrCodeForm from "./qr-code-form";
// @ts-ignore
import qrCode from "qr-code-and-vcard/dist/QrCode";
import { Grid, Stack } from "@mui/material";
import Header from "./components/header/header";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

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
const testCard = {
  version: "3.0",
  lastName: "Нижинский",
  middleName: "D",
  firstName: "Костя",
  nameSuffix: "JR",
  namePrefix: "MR",
  nickname: "Test User",
  gender: "M",
  organization: "ACME Corporation",
  workPhone: "312-555-1212444",
  homePhone: "312-555-1313333",
  cellPhone: "312-555-1414111",
  pagerPhone: "312-555-1515222",
  homeFax: "312-555-1616",
  workFax: "312-555-1717",
  birthday: "20140112",
  anniversary: "20140112",
  title: "Crash Test Dummy",
  role: "Crash Testing",
  email: "john.doe@testmail",
  workEmail: "john.doe@workmail",
  url: "http://johndoe",
  workUrl: "http://acemecompany/johndoe",
  homeAddress: {
    label: "Home Address",
    street: "123 Main Street",
    city: "Chicago",
    stateProvince: "IL",
    postalCode: "12345",
    countryRegion: "United States of America",
  },

  workAddress: {
    label: "Work Address",
    street: "123 Corporate Loop\nSuite 500",
    city: "Los Angeles",
    stateProvince: "CA",
    postalCode: "54321",
    countryRegion: "California Republic",
  },

  source: "http://sourceurl",
  note: "dddddd",
  socialUrls: {
    facebook: "johndoe",
    linkedIn: "johndoe",
    twitter: "johndoe",
    flickr: "johndoe",
    skype: "test_skype",
    custom: "johndoe",
  },
};

export default function App() {
  const qr_image = qrCode.createVCardQr(testCard, {
    typeNumber: 30,
    cellSize: 2,
  });
  const styles = useStyles();
  return (
    <Container maxWidth={false} disableGutters className={styles.body}>
      <Stack>
        <Header />

        <Grid container className={styles.centerElements}>
          <Grid className={`${styles.gridStyle} ${styles.form}`} item md={7}>
            <QrCodeForm qr_image={qr_image} />
          </Grid>
          <Grid
            item
            md={4}
            className={`${styles.gridStyle} ${styles.qrContainer}`}
          >
            <div
              dangerouslySetInnerHTML={{ __html: qr_image }}
              className={styles.qr}
            />
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
