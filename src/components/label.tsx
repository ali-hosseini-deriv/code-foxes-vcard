import { makeStyles } from "@mui/styles";
import React from "react";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  Label: {
    marginRight: "5px",
    marginLeft: "5px",
    textAlign: (props: any) => props.text_align,
    color: (props: any) => props.color,
  },
}));

type Props = {
  variant: any;
  text: string;
  text_align?: string;
  color?: string;
};

const Label: React.FC<Props> = ({
  text = "",
  variant = "h1",
  color = "white",
  text_align = "left",
}) => {
  const styles = useStyles({ color, text_align });
  return (
    <Typography className={styles.Label} variant={variant}>
      {text}
    </Typography>
  );
};

export default Label;
