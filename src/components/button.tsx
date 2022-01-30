import { Button as MuiButton } from "@mui/material";

import { styled } from "@mui/styles";
import { MouseEventHandler } from "react";

const StyledButton = styled(MuiButton)({});

type Props = {
  text: string;
  onclick: MouseEventHandler<HTMLButtonElement>
};

const Button: React.FC<Props> = ({ text = "", onclick }) => {
  return (
    <StyledButton variant="contained" onClick={onclick}>
      {text}
    </StyledButton>
  );
};

export default Button;
