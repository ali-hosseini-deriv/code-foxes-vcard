import React from "react";
import Card from "../components/card";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import Label from "../components/label";
import Flex from "../components/flex";

const useStyles = makeStyles((theme: Theme) => ({
  ModernTemplatet: {
    color: (props: any) => props.color,
    width: (props: any) => props.width,
    padding: "1rem",
    border: "1px solid #D3D3D3",
    borderRadius: "1rem !important",
    backgroundColor: (props: any) => props.bgColor,
  },
}));

type Props = {
  color?: string;
  width?: string;
  bgColor?: string;
  data: any;
};

const SimpleTemplate: React.FC<Props> = ({
  color = "black",
  width = "4rem",
  bgColor = "white",
  data,
}) => {
  const { formValues, qr_image } = data;
  const styles = useStyles({ color, width, bgColor });
  return (
    <Card bgColor="#202221" id="visit-card" width="42rem">
      <Flex>
        <div
          style={{ marginRight: "40px", marginTop: "20px" }}
          dangerouslySetInnerHTML={{ __html: qr_image }}
        />
        <Flex direction="column">
          <Label variant="h4" text="Deriv Card" color="#ff4f48" />
          <Label variant="h5" text={formValues.firstName} color="white" />
          <Label variant="h5" text={formValues.lastName} color="white" />
          <Label variant="h4" text="***" color="#ff4f48" />

          <Label variant="h6" text="EMAIL:" color="white" />
          <Label variant="subtitle1" text={formValues.email} color="white" />

          <Label variant="h6" text="TEL:" color="white" />
          <Label
            variant="subtitle1"
            text={formValues.cellPhone}
            color="white"
          />

          <Label variant="h6" text="WEBSITE:" color="white" />
          <Label variant="subtitle1" text={formValues.workUrl} color="white" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default SimpleTemplate;
