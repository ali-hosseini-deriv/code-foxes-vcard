import { useLocation } from "react-router-dom";
import Card from "../components/card";
import Container from "@mui/material/Container";
import Text from "../components/typography";
import Button from "../components/button";
import Flex from "../components/flex";
import { styled } from "@mui/styles";
// @ts-ignore
import domtoimage from "dom-to-image";

export default function visitCard() {
  let data: any = useLocation().state;

  async function downloadCard() {
    domtoimage
      .toJpeg(document.getElementById("visit-card"), { quality: 2 })
      .then(function (dataUrl: any) {
        var link = document.createElement("a");
        link.download = "deriv-visit-card.jpeg";
        link.href = dataUrl;
        link.click();
      });
  }

  function sendTo() {
    
  }
  return (
    <Container maxWidth={false}>
      <Card bgColor="#202221" id="visit-card" width="42rem">
        <Flex>
          <Flex direction="column">
            <Text variant="h4" text="Deriv Card" color="#ff4f48" />
            <Text variant="h5" text={data.firstName} color="white" />
            <Text variant="h5" text={data.lastName} color="white" />
            <Text variant="h4" text="***" color="#ff4f48" />

            <Text variant="h6" text="EMAIL:" color="white" />
            <Text variant="subtitle1" text={data.email} color="white" />

            <Text variant="h6" text="TEL:" color="white" />
            <Text variant="subtitle1" text={data.cellPhone} color="white" />

            <Text variant="h6" text="WEBSITE:" color="white" />
            <Text variant="subtitle1" text={data.workUrl} color="white" />
          </Flex>

          <div
            style={{ marginLeft: "80px", marginTop: "20px" }}
            dangerouslySetInnerHTML={{ __html: data.qr_image }}
          />
        </Flex>
      </Card>
      <Flex>
        <Button text="Download" onclick={() => downloadCard()} />
        <Button text="Send to" onclick={() => sendTo()} />
      </Flex>
    </Container>
  );
}
