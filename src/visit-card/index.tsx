import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "../components/button";
import ModernTemplate from "./modern-template";
import templates from "../enums";
import {Grid} from "@mui/material";
import DropDown from "../components/dropdown";
// @ts-ignore
import domtoimage from "dom-to-image";
import SimpleTemplate from "./simple-template";

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

export default function visitCard() {
    let data: any = useLocation().state;

    async function downloadCard() {
        domtoimage
            .toJpeg(document.getElementById("visit-card"), {quality: 2})
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

    const [bg_color, setBGColor] = useState("");
    const [font_color, setFontColor] = useState("");

    const onBGColorChange = (e: any) => {
        const {value} = e.target;
        setBGColor(value);
    };

    const onFontColorChange = (e: any) => {
        const {value} = e.target;
        setFontColor(value);
    };

    return (
        <Container maxWidth={false}>
            <Grid container mt={3}>
                <Grid container>
                    <Grid md={2} xs={12}>
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
                        <Grid container>
                            <Grid item md={6} xs={6}  >
                                <Button text="Download" onclick={() => downloadCard()}/>
                            </Grid>
                            <Grid item md={6} xs={6}>
                                <Button text="Send to" onclick={() => sendTo()}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid md={8} overflow='hidden' mt={3}>
                        {data.template === templates.modern ? (
                            <ModernTemplate
                                data={data}
                                bg_color={bg_color}
                                font_color={font_color}
                            />
                        ) : (
                            <SimpleTemplate
                                data={data}
                                bg_color={bg_color}
                                font_color={font_color}
                            />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
