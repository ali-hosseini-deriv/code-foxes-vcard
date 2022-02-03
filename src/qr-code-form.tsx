import TextInput from "./components/text-input";
import Text from "./components/typography";
import DropDown from "./components/dropdown";
import Button from "./components/button";
import React from "react";
import { Grid } from "@mui/material";
import Flex from "./components/flex";
import Dialog from "./components/dialog";
import templates from "./enums";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const countries = ["Malta", "Iran", "USA", "Belarus"];
const defaultValues = {
  firstName: "",
  lastName: "",
  mobile: "",
  phone: "",
  fax: "",
  email: "",
  company: "",
  job: "",
  country: "",
  street: "",
  zip: "",
  state: "",
  city: "",
};
const QrCodeForm = (qr_image: any) => {
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [is_open, setOpen] = useState(false);

  const onValueChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function openDialog() {
    setOpen(true);
    console.log('form calues: ', formValues);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("values", formValues);
      }}
    >
      <Text variant="h6" text="YOUR NAME" />
      <Grid container>
        <Grid item md={6} xs={12}>
          <TextInput
            id="first-name-input"
            name="firstName"
            label="First Name"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="last-name-input"
            name="lastName"
            label="Last Name"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
      </Grid>
      <Text variant="h6" text="CONTACT" />
      <Grid container>
        <Grid item md={6} xs={12}>
          <TextInput
            id="email-input"
            name="email"
            label="Email"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="mobile-input"
            name="mobile"
            label="Mobile"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} xs={12}>
          <TextInput
            id="phone-input"
            name="phone"
            label="Phone"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="fax-input"
            name="fax"
            label="Fax"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
      </Grid>
      <Text variant="h6" text="COMPANY" />
      <Grid container>
        <Grid item md={6} xs={12}>
          <TextInput
            id="company-name-input"
            name="company-name"
            label="Company"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="job-input"
            name="job"
            label="Your Job"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
      </Grid>
      <Text variant="h6" text="LOCATION" />
      <Grid container>
        <Grid item md={12} xs={12}>
          <TextInput
            id="street-input"
            name="street"
            label="Street Address"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <DropDown
            name="country"
            value={formValues.country}
            label="Country"
            items={countries}
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="state-input"
            name="state"
            label="State"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="city-input"
            name="city"
            label="City Address"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextInput
            id="zip-input"
            name="zip"
            label="Zip Code"
            type="text"
            onChange={onValueChange}
          />
        </Grid>
      </Grid>
      <Button text="Generate QR Code" type="submit" />

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
            state={{formValues, qr_image, template: templates.modern }}
          >
            Modern Template
          </Link>
          <Link
            style={{ textDecoration: "none", padding: "5px" }}
            to="./visit-card"
            state={{ formValues, qr_image, template: templates.simple }}
          >
            Simple Template
          </Link>
        </Flex>
      </Dialog>
    </form>
  );
};

export default QrCodeForm;
