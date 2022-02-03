import React from "react";
import Card from "../components/card";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import Text from "../components/typography";
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
  data:any;
};

const ModernTemplate: React.FC<Props> = ({

  color = "black",
  width = "4rem",
  bgColor = "white",
  data,

}) => {
  const styles = useStyles({ color, width, bgColor });
  return (
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
  );
};

export default ModernTemplate;
