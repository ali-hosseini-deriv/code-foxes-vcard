import ButtonUnstyled from '@mui/base/ButtonUnstyled';

import {makeStyles} from "@mui/styles";
import React, {MouseEventHandler} from "react";

const useStyles = makeStyles(() => ({
    button:
        {
            display: "inline-flex",
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxSizing: 'border-box',
            outline: 0,
            margin: 0,
            cursor: "pointer",
            userSelect: 'none',
            verticalAlign: 'middle',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: "0.875rem",
            lineHeight: "1.75",
            letterSpacing: "0.02857em",
            textTransform: "uppercase",
            minWidth: "64px",
            padding: "6px 16px",
            border: (props: { variant: string, disabled: boolean }) => !props.disabled ? "1px solid #ff444f" : "grey",
            transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            backgroundColor: (props: { variant: string, disabled: boolean }) => {
                if (props.disabled) return "grey"
                else if (props.variant === "contained") return '#ff444f'
                return "transparent"
            },
            borderRadius: "4px",
            color: (props: { variant: string }) => props.variant === "contained" ? "white" : "#d43e47",
            "&:hover": {
                backgroundColor: (props: { variant: string, disabled: boolean }) => {
                    if (!props.disabled) return '#d43e47'
                },
                color: "white",
                borderColor: "#ff444f",
            }
        },
}));

type Props = {
    text: string;
    onclick?: MouseEventHandler<HTMLButtonElement>;
    variant?: "text" | "outlined" | "contained";
    type?: "submit";
    disabled?: boolean;
};

const Button: React.FC<Props> = ({text = "", onclick, variant = "contained", type, disabled = false}) => {
    const styles = useStyles({variant, disabled})
    return (
        <ButtonUnstyled className={styles.button} type={type} variant={variant} onClick={onclick} disabled={disabled}>
            {text}
        </ButtonUnstyled>
    );
};

export default Button;
