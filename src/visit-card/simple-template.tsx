import React, { useState } from "react";
import Card from "../components/card";
import Label from "../components/label";
import Flex from "../components/flex";

type Props = {
  font_color?: string;
  bg_color?: string;
  data: any;
};

const ModernTemplate: React.FC<Props> = ({ font_color, bg_color, data }) => {
  const { formValues, qr_image } = data;

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
    </>
  );
};

export default ModernTemplate;
