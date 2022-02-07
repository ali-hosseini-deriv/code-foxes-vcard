import * as React from "react";
import { makeStyles } from "@mui/styles";
import { borderBottom, textAlign } from "@mui/system";

const useStyles = makeStyles(() => ({
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
  const styles = useStyles();

  const placeHolder = '<img width="250px" height="250px" src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" />'

  return (
    <>
     <div
        dangerouslySetInnerHTML={{ __html: props.qr_image ? props.qr_image : placeHolder }}
        className={styles.qr}
     />
     <p className={styles.text}>{ props.qr_image ? "Your QR code ready to be scan." : "Input card details to generate QR code."}</p>
    </>
  );
}

export default QrCodeSection;