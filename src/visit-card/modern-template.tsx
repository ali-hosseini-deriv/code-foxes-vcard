import React, { useState } from "react";
import Card from "../components/card";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import Label from "../components/label";
import Flex from "../components/flex";
import DropDown from "../components/dropdown";
import { Grid } from "@mui/material";

const colors = [
  "AliceBlue",
  "AntiqueWhite",
  "black",
  "white",
  "Bisque",
  "BlueViolet",
  "blue",
  "red",
  "green",
  "Brown",
  "Chartreuse",
  "CadetBlue",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Crimson",
  "DarkBlue",
  "DarkOliveGreen",
  "DeepPink",
];

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
  width = "4rem",
  bgColor = "white",
  data,
}) => {
  const styles = useStyles({ width, bgColor });
  const { formValues, qr_image } = data;

  const [bg_color, setBGColor] = useState("");
  const [font_color, setFontColor] = useState("");

  const onBGColorChange = (e: any) => {
    const { value } = e.target;
    setBGColor(value);
  };

  const onFontColorChange = (e: any) => {
    const { value } = e.target;
    setFontColor(value);
  };

  return (
    <>
      <Card bgColor={bg_color} id="visit-card">
        <Flex>
          <Flex direction="column">
          <Label variant="h4" text="Deriv Card" color="#ff4f48" />
            <Flex>
              <Label
                variant="h6"
                text={formValues.firstName}
                color={font_color}
              />
              <Label
                variant="h6"
                text={formValues.lastName}
                color={font_color}
              />
            </Flex>

            <Label variant="h6" text="***" color="#ff4f48" />

            <Label variant="subtitle1" text="EMAIL:" color={font_color} />
            <Label
              variant="subtitle2"
              text={formValues.email}
              color={font_color}
            />

            <Label variant="subtitle1" text="TEL:" color={font_color} />
            <Label
              variant="subtitle2"
              text={formValues.cellPhone}
              color={font_color}
            />

            <Label variant="subtitle1" text="WEBSITE:" color={font_color} />
            <Label
              variant="subtitle2"
              text={formValues.website}
              color={font_color}
            />
          </Flex>

          <div
            style={{ marginLeft: "80px", marginTop: "20px" }}
            dangerouslySetInnerHTML={{ __html: qr_image }}
          />
        </Flex>
      </Card>
      <Grid md={2}>
        <DropDown
          name="bgColor"
          value={bg_color}
          label="Background Color"
          items={colors}
          onChange={onBGColorChange}
        />
        <DropDown
          name="fontColor"
          value={font_color}
          label="Font Color"
          items={colors}
          onChange={onFontColorChange}
        />
      </Grid>
    </>
  );
};

export default ModernTemplate;
