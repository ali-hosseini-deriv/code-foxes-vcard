import React from "react";
import { Card as MuiCard } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  Card: {
    color: (props: any) => props.color,
    width: "40rem",
    padding: "1rem",
    border: "1px solid #D3D3D3",
    borderRadius: "1rem !important",
    backgroundColor: (props: any) => props.bgColor,
  },
}));

type Props = {
  children: React.ReactNode;
  color?: string;
  bgColor?: string;
};

const Card: React.FC<Props> = ({
  children,
  color = "black",
  bgColor = "white",
}) => {
  const styles = useStyles({ color, bgColor });
  return (
    <MuiCard className={styles.Card} variant="outlined">
      {children}
    </MuiCard>
  );
};

export default Card;
