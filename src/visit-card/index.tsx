import { useLocation } from "react-router-dom";
import Card from "../components/card";
import Container from "@mui/material/Container";
import Text from "../components/typography";
import Felx from "../components/flex";
import { styled } from "@mui/styles";

export default function visitCard() {
  let data: any = useLocation().state;
  console.log("data: ", data);

  return (
    <Container maxWidth={false}>
      <Card>
        <Text variant="h4" text="Deriv Visit Card" />
        <Text variant="h4" text="***" />
        <Text variant="h6" text="FIRST NAME" />
        <Text variant="subtitle1" text={data.firstName} />
        <Text variant="h6" text="LAST NAME" />
        <Text variant="subtitle1" text={data.lastName} />
        <Text variant="h6" text="TEl:" />
        <Text variant="subtitle1" text={data.cellPhone} />
      </Card>
    </Container>
  );
}
