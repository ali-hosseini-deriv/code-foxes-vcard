import React from "react";
import Card from "../components/card";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import Text from "../components/typography";
import Flex from "../components/flex";

const useStyles = makeStyles((theme: Theme) => ({
  ModernTemplatet: {
    color: (props: any) => `${props.color} !important`,
    width: (props: any) => props.width,
    padding: "1rem",
    border: "1px solid #D3D3D3",
    borderRadius: "1rem !important",
    backgroundColor: (props: any) => `${props.bgColor} !important`,
  },
}));

type Props = {
  color?: string;
  width?: string;
  bgColor?: string;
  data: any;
};

const ModernTemplate: React.FC<Props> = ({
  color = "black",
  width = "4rem",
  bgColor = "white",
  data,
}) => {
  const styles = useStyles({ color, width, bgColor });
  const { formValues, qr_image } = data;
  console.log(" qr_image : ", qr_image);
  return (
    <Card bgColor="#202221" id="visit-card" width="42rem">
      <Flex>
        <Flex direction="column">
          <Text
            variant="h4"
            borderBottom="none"
            marginBottom="none"
            containerBoreder="none"
            text="Deriv Card"
            color="#ff4f48"
          />
          <Text
            variant="h5"
            borderBottom="none"
            marginBottom="none"
            containerBoreder="none"
            text={formValues.firstName}
            color="white"
          />
          <Text
            variant="h5"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text={formValues.lastName}
            color="white"
          />
          <Text
            variant="h4"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text="***"
            color="#ff4f48"
          />

          <Text
            variant="h6"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text="EMAIL:"
            color="white"
          />
          <Text
            variant="subtitle1"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text={formValues.email}
            color="white"
          />

          <Text
            variant="h6"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text="TEL:"
            color="white"
          />
          <Text
            variant="subtitle1"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text={formValues.cellPhone}
            color="white"
          />

          <Text
            variant="h6"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text="WEBSITE:"
            color="white"
          />
          <Text
            variant="subtitle1"
            borderBottom="none"
            containerBoreder="none"
            marginBottom="none"
            text={formValues.workUrl}
            color="white"
          />
        </Flex>

        <div
          style={{ marginLeft: "80px", marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: qr_image }}
        />
      </Flex>
    </Card>
  );
};

export default ModernTemplate;
