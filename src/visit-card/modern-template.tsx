import React from "react";
import Card from "../components/card";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import Label from "../components/label";
import Flex from "../components/flex";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
  qrContainer: {
    padding: "30px",

    "&>img": {
      width: "11rem",
      height: "11rem",
    },
  },
  gridStyle: {
    border: (props: any) => `1px solid ${props.borderColor}`,
    borderRadius: "5px",
    margin: "20px !important",
  },
}));

type Props = {
  font_color?: string;
  bg_color?: string;
  data: any;
};

const SimpleTemplate: React.FC<Props> = ({ font_color, bg_color, data }) => {
  const { formValues, qr_image } = data;
  const styles = useStyles({ borderColor: font_color });

  return (
    <Container>
      <Card bgColor={bg_color} id="visit-card">
        <Flex>
          <Flex direction="column">
            <Grid>
              <Grid md={12}>
                <div
                  className={`${styles.gridStyle} ${styles.qrContainer}`}
                  dangerouslySetInnerHTML={{ __html: qr_image }}
                />
              </Grid>
            </Grid>
          </Flex>

          <Flex direction="column">
            <Flex margin="10px">
              <Label
                variant="h4"
                text={formValues.firstName}
                color={font_color}
              />
              <Label
                variant="h4"
                text={formValues.lastName}
                color={font_color}
              />
            </Flex>

            {formValues.email && (
              <Flex margin="10px">
                <img
                  src={require("../statics/email-icon.png")}
                  width="20px"
                  height="20px"
                />
                <Label
                  variant="subtitle2"
                  text={formValues.email}
                  color={font_color}
                />
              </Flex>
            )}
            {formValues.mobile && (
              <Flex margin="10px">
                <img
                  src={require("../statics/mobile-icon.png")}
                  width="20px"
                  height="20px"
                />
                <Label
                  variant="subtitle2"
                  text={formValues.mobile}
                  color={font_color}
                />
              </Flex>
            )}
            {formValues.phone && (
              <Flex margin="10px">
                <img
                  src={require("../statics/phone-icon.png")}
                  width="20px"
                  height="20px"
                />
                <Label
                  variant="subtitle2"
                  text={formValues.phone}
                  color={font_color}
                />
              </Flex>
            )}
            {formValues.company && (
              <Flex margin="10px">
                <img
                  src={require("../statics/company-icon.png")}
                  width="20px"
                  height="20px"
                />
                <Label
                  variant="subtitle2"
                  text={formValues.company}
                  color={font_color}
                />
              </Flex>
            )}
            {formValues.website && (
              <Flex margin="10px">
                <img
                  src={require("../statics/web-icon.png")}
                  width="20px"
                  height="20px"
                />
                <Label
                  variant="subtitle2"
                  text={formValues.website}
                  color={font_color}
                />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Card>
    </Container>
  );
};

export default SimpleTemplate;
