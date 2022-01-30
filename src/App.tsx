import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// @ts-ignore
import qrCode from 'qr-code-and-vcard/dist/QrCode'
import ProTip from './ProTip';

const testCard = {
    version: '3.0',
    lastName: 'Нижинский',
    middleName: 'D',
    firstName: 'Костя',
    nameSuffix: 'JR',
    namePrefix: 'MR',
    nickname: 'Test User',
    gender: 'M',
    organization: 'ACME Corporation',
    workPhone: '312-555-1212444',
    homePhone: '312-555-1313333',
    cellPhone: '312-555-1414111',
    pagerPhone: '312-555-1515222',
    homeFax: '312-555-1616',
    workFax: '312-555-1717',
    birthday: "20140112",
    anniversary: "20140112",
    title: 'Crash Test Dummy',
    role: 'Crash Testing',
    email: 'john.doe@testmail',
    workEmail: 'john.doe@workmail',
    url: 'http://johndoe',
    workUrl: 'http://acemecompany/johndoe',
    homeAddress: {
        label: 'Home Address',
        street: '123 Main Street',
        city: 'Chicago',
        stateProvince: 'IL',
        postalCode: '12345',
        countryRegion: 'United States of America'
    },

    workAddress: {
        label: 'Work Address',
        street: '123 Corporate Loop\nSuite 500',
        city: 'Los Angeles',
        stateProvince: 'CA',
        postalCode: '54321',
        countryRegion: 'California Republic'
    },

    source: 'http://sourceurl',
    note: 'dddddd',
    socialUrls: {
        facebook: 'johndoe',
        linkedIn: 'johndoe',
        twitter: 'johndoe',
        flickr: 'johndoe',
        skype: "test_skype",
        custom: 'johndoe'
    }
};

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    const qr_image = qrCode.createVCardQr(testCard, {typeNumber: 30, cellSize: 5})

    return (
        <Container maxWidth="sm">
            <div dangerouslySetInnerHTML={{__html: qr_image}}>
            </div>
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Create React App example with TypeScript
                </Typography>
                <ProTip/>
                <Copyright/>
            </Box>
        </Container>
    );
}
