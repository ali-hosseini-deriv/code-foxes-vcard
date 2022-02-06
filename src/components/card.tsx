import React from "react";
import { Card as MuiCard } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  Card: {
    color: (props: any) => props.color,
    width: (props: any) => props.width,
    padding: "1rem",
    border: "1px solid #D3D3D3",
    borderRadius: "1rem !important",
    backgroundColor: (props: any) => props.bgColor,
  },
}));

type Props = {
  children: React.ReactNode;
  color?: string;
  width?: string;
  bgColor?: string;
  id: string;
};

const Card: React.FC<Props> = ({
  children,
  color = "black",
  width = "4rem",
  bgColor = "white",
  id,
}) => {
  const styles = useStyles({ color, width, bgColor });
  return (
    <MuiCard id={id} className={styles.Card} variant="outlined">
      {children}
    </MuiCard>
  );
};

export default Card;
