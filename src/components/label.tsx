import { makeStyles } from "@mui/styles";
import React from "react";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  Label: {
    fontWeight: "bold",
    marginTop: "10px",
    display: "flex",
    width: "fit-content",
    color: (props:any) => props.color,
    // display:'inline-block'
  },
}));

type Props = {
  variant: any,
  text: string,
  color?: string,
};

const Label: React.FC<Props> = ({
  text = "",
  variant = "h1",
  color = "white",
}) => {
  const styles = useStyles({color});
  return (
    <Typography className={styles.Label} variant={variant} color={color}>
      {text}
    </Typography>
  );
};

export default Label;
