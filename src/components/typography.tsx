import { makeStyles } from "@mui/styles";
import React from "react";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  container: {
    borderBottom: (props: any) => props.containerBoreder || "2px #ebe9e9 solid",
    paddingLeft: "30px !important",
    marginTop: "15px",
  },
  typography: {
    fontWeight: "bold",
    marginTop: "10px",
    display: "flex",
    marginBottom: (props: any) => props.marginBottom || "-2px !important",
    borderBottom: (props: any) => props.borderBottom || "2px #ff444f solid",
    color: (props: any) => props.color || "black",
    width: "fit-content",
    // display:'inline-block'
  },
}));

type Props = {
  variant: any;
  text: string;
  color?: string;
  borderBottom?: string;
  containerBoreder?: string;
  marginBottom?: string;
};

const Text: React.FC<Props> = ({
  text = "",
  variant = "h1",
  color,
  borderBottom,
  containerBoreder,
  marginBottom,
}) => {
  const styles = useStyles({
    borderBottom,
    color,
    containerBoreder,
    marginBottom,
  });
  return (
    <div className={styles.container}>
      <Typography className={styles.typography} variant={variant}>
        {text}
      </Typography>
    </div>
  );
};

export default Text;
