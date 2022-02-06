import React from "react";
import { Card as MuiCard } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { bgcolor, Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  card: (props: any) => ({
    backgroundColor: props.bgColor || '#202221',
    color: props.color || 'white',
    width: props.width,
    height: props.height,
    padding: "1rem",
    border: "1px solid #D3D3D3",
    borderRadius: "1rem !important",
  }),
}));

type Props = {
  children: React.ReactNode;
  color?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  id: string;
};

const Card: React.FC<Props> = ({
  children,
  color = "white",
  width = "42rem",
  height = "22rem",
  bgColor = "#202221",
  id,
}) => {

  const styles = useStyles({ color, width, height, bgColor });
  return (
    <MuiCard>
      <div id={id} className={styles.card}>
        {children}
      </div>
    </MuiCard>
  );
};

export default Card;
