import TextInput from "./components/text-input";
import Text from "./components/typography";
import DropDown from "./components/dropdown";
import Button from "./components/button";
import React, {useState} from "react";
import {Grid} from "@mui/material";
import Flex from "./components/flex";
import Dialog from "./components/dialog";
import templates from "./enums";
import {Link} from "react-router-dom";
// @ts-ignore
import qrCode from "qr-code-and-vcard/dist/QrCode";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    gridStyle: {
        border: "1px solid #ebe9e9",
        borderRadius: "5px",
        margin: "20px !important",
    },
    form: {
        margin: "30px",
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
    center: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
    },
    inner: {
        padding: "30px"
    },
    button: {

        "& button": {
            margin: "30px",
        }
    }
}));

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
const QrCodeForm = () => {
    const [formValues, setFormValues] = React.useState(defaultValues);
    const [qr_image, setQRImage] = React.useState("");
    const [is_open, setOpen] = useState(false);

    const styles = useStyles();

    const onValueChange = (e: any) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

  function openDialog(e: any) {
    e.preventDefault();
    if (formValues.firstName && formValues.lastName && qr_image) {
      setOpen(true);
      return;
    }
    alert("fill the form and QR code.");
  }

    function handleClose() {
        setOpen(false);
    }

    function generateQRCode() {
        const qrcode = qrCode.createVCardQr(formValues, {
            typeNumber: 30,
            cellSize: 2,
        });
        setQRImage(qrcode);
        console.log("QRImage:", qr_image);
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                generateQRCode();
                console.log("values", formValues);
            }}
        >
            <Grid container className={styles.center}>
                <Grid item md={7} xs={12} className={`${styles.gridStyle} ${styles.form}`}>
                    <Text variant="h6" text="YOUR NAME"/>
                    <Grid container className={styles.inner}>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="first-name-input"
                                name="firstName"
                                label="First Name"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. Olga"}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="last-name-input"
                                name="lastName"
                                label="Last Name"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. Jones"}
                            />
                        </Grid>
                    </Grid>
                    <Text variant="h6" text="CONTACT"/>
                    <Grid container className={styles.inner}>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="email-input"
                                name="email"
                                label="Email"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. your@mail.com"}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="mobile-input"
                                name="mobile"
                                label="Mobile"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. +242 000 0000"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={styles.inner}>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="phone-input"
                                name="phone"
                                label="Phone"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. +242 000 0000"}
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
                    <Text variant="h6" text="COMPANY"/>
                    <Grid container className={styles.inner}>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="company-name-input"
                                name="company-name"
                                label="Company"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. Google"}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="job-input"
                                name="job"
                                label="Your Job"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. Frontend Developer"}
                            />
                        </Grid>
                    </Grid>
                    <Text variant="h6" text="LOCATION"/>
                    <Grid container className={styles.inner}>
                        <Grid item md={12} xs={12}>
                            <TextInput
                                id="street-input"
                                name="street"
                                label="Street Address"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. Your Street name"}
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
                                placeHolder={"e.g. Tehran"}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="city-input"
                                name="city"
                                label="City Address"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. Tehran"}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextInput
                                id="zip-input"
                                name="zip"
                                label="Zip Code"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. 12345"}
                            />
                        </Grid>
                    </Grid>
                    <Text variant="span" text="ONLINE"/>
                    <Grid container className={styles.inner}>
                        <Grid item md={12} xs={12}>
                            <TextInput
                                id="website-input"
                                name="website"
                                label="Website"
                                type="text"
                                onChange={onValueChange}
                                placeHolder={"e.g. your-website.com"}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className={styles.inner}>
                        <Grid item md={6} xs={6}>
                            <Button text="Generate QR Code" type="submit"/>
                        </Grid>
                        <Grid item md={6} xs={6}>
                            <Button text="Generate Visit Card" onclick={openDialog} disabled={!qr_image}/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid
                    item
                    md={4}
                    className={`${styles.gridStyle} ${styles.qrContainer}`}
                >
                    <div
                        dangerouslySetInnerHTML={{__html: qr_image}}
                        className={styles.qr}
                    />
                </Grid>
            </Grid>

            <Dialog is_open={is_open} handleClose={handleClose}>
                <Text variant="h6" text="Choose your preffered template"/>
                <Flex>
                    <Link
                        style={{
                            marginRight: "2rem",
                            textDecoration: "none",
                            padding: "5px",
                        }}
                        to="./visit-card"
                        state={{formValues, qr_image, template: templates.modern}}
                    >
                        Modern Template
                    </Link>
                    <Link
                        style={{textDecoration: "none", padding: "5px"}}
                        to="./visit-card"
                        state={{formValues, qr_image, template: templates.simple}}
                    >
                        Simple Template
                    </Link>
                </Flex>
            </Dialog>
        </form>
    );
};

export default QrCodeForm;
