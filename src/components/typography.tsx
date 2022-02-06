import { makeStyles } from "@mui/styles";
import React from "react";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  container: {
    borderBottom: "2px #ebe9e9 solid",
    paddingLeft: "30px !important",
    margin: "20px 0",
  },
  typography: {
    fontWeight: "bold",
    marginTop: "10px",
    display: "flex",
    marginBottom: "-2px !important",
    borderBottom: "2px #ff444f solid",
    width: "fit-content",
    // display:'inline-block'
  },
}));

type Props = {
  variant: any;
  text: string;
  color?: string;
};

const Text: React.FC<Props> = ({
  text = "",
  variant = "h1",
  color = "black",
}) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Typography className={styles.typography} variant={variant} color={color}>
        {text}
      </Typography>
    </div>
  );
};

export default Text;
