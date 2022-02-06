import React, { ReactText } from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  link: (props: any) => ({
    margin: props.margin,
    textDecoration: "none",
    padding: "5px",
    backgroundColor: "#ff444f",
    border: "2px solid #ff444f",
    color: "white",
    borderRadius: "6px",
    "&:hover": {
      backgroundColor: "#ff444f !important",
      color: "white",
      borderColor: "#ff444f",
    },
  }),
}));

type Props = {
  children: React.ReactNode;
  to: string;
  state: any;
  margin?: string;
};

const LinkButton: React.FC<Props> = ({ children, to, state, margin }) => {
  const styles = useStyles({ margin });
  return (
    <Link to={to} state={state} className={styles.link}>
      {children}
    </Link>
  );
};

export default LinkButton;
