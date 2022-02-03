import TextInput from "./components/text-input";
import Text from "./components/typography";
import Flex from "./components/flex";
import DropDown from "./components/dropdown";
import Button from "./components/button";
import RadioButton from "./components/radio-button";
import RadioGroup from "./components/radio-group";
import Dialog from "./components/dialog";
import templates from "./enums";
import { Grid, Radio } from "@mui/material";
import { Link } from "react-router-dom";
// @ts-ignore
import qrCode from "qr-code-and-vcard/dist/QrCode";
import { useEffect, useState } from "react";

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

const countries = [
  { value: 1, text: "Malta" },
  { value: 2, text: "Iran" },
  { value: 3, text: "USA" },
  { value: 4, text: "Belarus" },
];

const QrCodeForm = () => {
  const [is_open, setOpen] = useState(false);

  const qr_image = qrCode.createVCardQr(testCard, {
    typeNumber: 30,
    cellSize: 2,
  });

  function openDialog() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Text variant="h6" text="YOUR NAME" />
      <Flex>
        <Text variant="subtitle1" text="FIRST NAME" />
        <TextInput />
        <Text variant="subtitle1" text="LAST NAME" />
        <TextInput />
      </Flex>
      <Text variant="h6" text="CONTACT" />
      <Flex>
        <Text variant="subtitle1" text="EMAIL" />
        <TextInput />
        <Text variant="subtitle1" text="MOBILE" />
        <TextInput />
        <Text variant="subtitle1" text="PHONE" />
        <TextInput />
        <Text variant="subtitle1" text="FAX" />
        <TextInput />
      </Flex>
      <Text variant="h6" text="COMPANY" />
      <Flex>
        <Text variant="subtitle1" text="COMPANY NAME" />
        <TextInput />
        <Text variant="subtitle1" text="YOUR JOB" />
        <TextInput />
      </Flex>
      <Text variant="h6" text="LOCATION" />
      <Flex>
        <Text variant="subtitle1" text="STREET ADDRES" />
        <TextInput />
        <Text variant="subtitle1" text="COUNTRY" />
        <DropDown value="country" label="country" items={countries} />
        <Text variant="subtitle1" text="STATE" />
        <TextInput />
        <Text variant="subtitle1" text="CITY" />
        <TextInput />
        <Text variant="subtitle1" text="ZIP" />
        <TextInput />
      </Flex>
      <Grid item md={3}>
        <div dangerouslySetInnerHTML={{ __html: qr_image }} />
      </Grid>
      <Button text="Generate QR Code" onclick={() => alert()} />
      <Button text="Generate Visit Card" onclick={() => openDialog()} />

      <Dialog is_open={is_open} handleClose={handleClose}>
        <Text variant="h6" text="Choose your preffered template" />
        <Flex>
          <Link
            style={{
              marginRight: "2rem",
              textDecoration: "none",
              padding: "5px",
            }}
            to="./visit-card"
            state={{ ...testCard, qr_image, template: templates.modern }}
          >
            Modern Template
          </Link>
          <Link
            style={{ textDecoration: "none", padding: "5px" }}
            to="./visit-card"
            state={{ ...testCard, qr_image, template: templates.simple }}
          >
            Simple Template
          </Link>
        </Flex>
      </Dialog>
    </>
  );
};

export default QrCodeForm;
