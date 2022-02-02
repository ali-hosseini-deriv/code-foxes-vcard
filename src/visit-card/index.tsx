import { useLocation } from "react-router-dom";
import Card from "../components/card";
import Container from "@mui/material/Container";
import Text from "../components/typography";
import Flex from "../components/flex";
import { styled } from "@mui/styles";

export default function visitCard() {
  let data: any = useLocation().state;

  return (
    <Container maxWidth={false}>
      <Card bgColor="black">
        <Flex>
          <Flex direction="column">
            <Text variant="h4" text="Deriv Visit Card" color="red" />
            <Text variant="h5" text={data.firstName} color="white" />
            <Text variant="h5" text={data.lastName} color="white" />
            <Text variant="h4" text="***" color="red" />

            <Text variant="h6" text="EMAIL:" color="white" />
            <Text variant="subtitle1" text={data.email} color="white" />

            <Text variant="h6" text="WEBSITE:" color="white" />
            <Text variant="subtitle1" text={data.cellPhone} color="white" />

            <Text variant="h6" text="WEBSITE:" color="white" />
            <Text variant="subtitle1" text={data.workUrl} color="white" />
          </Flex>
        
            <div dangerouslySetInnerHTML={{ __html: data.qr_image }} />

        </Flex>
      </Card>
    </Container>
  );
}
