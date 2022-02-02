import { Button as MuiButton } from "@mui/material";

import { styled } from "@mui/styles";
import React, { MouseEventHandler } from "react";
const StyledButton = styled(MuiButton)({
  backgroundColor: (props) =>
    props.variant === "contained" ? "#ff444f" : "transparent",
  borderColor: "#ff444f",
  borderWidth: "2px",
  borderRadius: "6px",
  color: (props) => (props.variant === "contained" ? "white" : "#d43e47"),
  "&:hover": {
    backgroundColor: "#d43e47",
    color: "white",
    borderColor: "#ff444f",
  },
});

type Props = {
  text: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
  variant?: "text" | "outlined" | "contained";
};

const Button: React.FC<Props> = ({
  text = "",
  onclick,
  variant = "contained",
}) => {
  return (
    <StyledButton variant={variant} onClick={onclick}>
      {text}
    </StyledButton>
  );
};

export default Button;
