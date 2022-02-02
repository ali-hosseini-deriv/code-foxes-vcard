import React from "react";
import { Card as MuiCard } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  Card: {
    color: (props:any) => props.color,
    width: "20rem",
    padding: "1rem",
    border: "1px solid #D3D3D3",
    borderRadius: "1rem !important",
    backgroundColor: "black !important",
  },
}));

type Props = {
  children: React.ReactNode;
  color?: string;
};

const Card: React.FC<Props> = ({ children, color = "black" }) => {
  const styles = useStyles({ color });
  return (
    <MuiCard className={styles.Card} variant="outlined">
      {children}
    </MuiCard>
  );
};

export default Card;
