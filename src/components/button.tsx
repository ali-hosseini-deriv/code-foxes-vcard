import {Button as MuiButton} from "@mui/material";

import {styled} from "@mui/styles";
import React, {MouseEventHandler} from "react";

const StyledButton = styled(MuiButton)(
    {
        backgroundColor: (props) => props.variant === "contained" ? '#ff444f' : "transparent",
        borderColor: "#ff444f",
        borderWidth: "2px",
        borderRadius: "6px",
        color: (props) => props.variant === "contained" ? "white" : "#d43e47",
        "&:hover": {
            backgroundColor: '#ff444f !important',
            color: "white",
            borderColor: "#ff444f",
        },
    });

type Props = {
    text: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    variant?: "text" | "outlined" | "contained";
    type?: "submit";
    disabled?:boolean;
};

const Button: React.FC<Props> = ({text = "", onclick, variant = "contained",type,disabled=false}) => {
    return (
        <StyledButton type={type} variant={variant} onClick={onclick} disabled={disabled}>
            {text}
        </StyledButton>
    );
};

export default Button;
