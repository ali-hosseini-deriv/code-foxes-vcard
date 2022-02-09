import * as React from "react";
import {makeStyles} from "@mui/styles";
// @ts-ignore
import domtoimage from "dom-to-image";

const useStyles = makeStyles(() => ({
    download: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',

    },
    qr: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
        "& img": {},
    },
    frame_section: {
        display: "flex",
        borderTop: "1px solid #ebe9e9",
        height: "100%",
        padding: "30px",
        backgroundColor: "#fafafa",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
    }
}));

type QrCodeSectionProps = {
    qr_image: string
}

const QrCodeSection = (props: QrCodeSectionProps) => {
    async function downloadCard() {
        domtoimage
            .toJpeg(document.getElementById("qr-code"), {quality: 2})
            .then(function (dataUrl: any) {
                var link = document.createElement("a");
                link.download = "qr-code.jpeg";
                link.href = dataUrl;
                link.click();
            });
    }


    const styles = useStyles();

    const placeHolder = '<img width="250px" height="250px" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" />'

    return (
        <>
            <div
                id={"qr-code"}
                dangerouslySetInnerHTML={{__html: props.qr_image ? props.qr_image : placeHolder}}
                className={styles.qr}
            />
            <p className={styles.text}>{props.qr_image ? "Your QR code ready to be scan." : "Input card details to generate QR code."}</p>
            {props.qr_image && <a onClick={downloadCard} className={styles.download}>
                Click Here to Download
            </a>}
        </>
    );
}

export default QrCodeSection;
