import { useLocation } from "react-router-dom";
import Card from "../components/card";
import Container from "@mui/material/Container";
import Text from "../components/typography";
import Button from "../components/button";
import Flex from "../components/flex";
import ModernTemplate from "../templates/modern-template";
import { styled } from "@mui/styles";
import templates from "../enums";
// @ts-ignore
import domtoimage from "dom-to-image";
import SimpleTemplate from "../templates/simple-template";

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
    window.open("mailto:");
  }

  return (
    <Container maxWidth={false}>
      {data.template === templates.modern ? (
        <ModernTemplate data={data} />
      ) : (
        <SimpleTemplate data={data} />
      )}

      <Flex>
        <Button text="Download" onclick={() => downloadCard()} />
        <Button text="Send to" onclick={() => sendTo()} />
      </Flex>
    </Container>
  );
}
