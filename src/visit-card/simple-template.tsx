import React from "react";
import Card from "../components/card";
import Label from "../components/label";
import Flex from "../components/flex";
import {makeStyles} from '@mui/styles';
import {Container} from '@mui/material';

type Props = {
    font_color?: string;
    bg_color?: string;
    data: any;
};


const useStyles = makeStyles(() => ({
    container: {
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
    },
}));

const SimpleTemplate: React.FC<Props> = ({font_color, bg_color, data}) => {
    const styles = useStyles()
    const {formValues, qr_image} = data;

    return (
        <Container className={styles.container}>
            <Card bgColor={bg_color} id="visit-card">
                <Flex>
                    <Flex direction="column">
                        <Flex>
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

                        <Label variant="h6" text="***" color={font_color}/>

                        <Label variant="subtitle1" text="EMAIL:" color={font_color}/>
                        <Label
                            variant="subtitle2"
                            text={formValues.email}
                            color={font_color}
                        />

                        <Label variant="subtitle1" text="TEL:" color={font_color}/>
                        <Label
                            variant="subtitle2"
                            text={formValues.phone}
                            color={font_color}
                        />

                        <Label variant="subtitle1" text="WEBSITE:" color={font_color}/>
                        <Label
                            variant="subtitle2"
                            text={formValues.website}
                            color={font_color}
                        />
                    </Flex>

                    <div
                        style={{marginLeft: "80px", marginTop: "10px"}}
                        dangerouslySetInnerHTML={{__html: qr_image}}
                    />
                </Flex>
            </Card>
        </Container>
    );
};

export default SimpleTemplate;
