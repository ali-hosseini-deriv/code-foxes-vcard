import TextInput from "./components/text-input";
import Text from "./components/typography";
import DropDown from "./components/dropdown";
import Button from "./components/button";
import React from 'react'
import {Grid} from '@mui/material';

const countries = [
    "Malta",
    "Iran",
    "USA",
    "Belarus",
];
const defaultValues = {
    name: "",
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
    const [formValues, setFormValues] = React.useState(defaultValues)
    const onValueChange = (e: any) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log("values", formValues)
        }}>
            <Text variant="h6" text="YOUR NAME"/>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <TextInput
                        id="first-name-input"
                        name="first-name"
                        label="First Name"
                        type="text"
                        onChange={onValueChange}

                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextInput
                        id="first-name-input"
                        name="last-name"
                        label="Last Name"
                        type="text"
                        onChange={onValueChange}

                    />
                </Grid>
            </Grid>
            <Text variant="h6" text="CONTACT"/>
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
            <Text variant="h6" text="COMPANY"/>
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
            <Text variant="h6" text="LOCATION"/>
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
                    <DropDown name="country" value={formValues.country} label="Country" items={countries}
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
            <Button text="Submit" type="submit"/>
        </form>
    );
};

export default QrCodeForm;
