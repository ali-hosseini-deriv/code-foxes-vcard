import React from "react";
import { Radio as MuiRadio } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  Radio: {},
}));

type Props = {
  id: any;
  value: any;
  text: any;
};

const RadioButton: React.FC<Props> = ({ id, value, text }) => {
  const styles = useStyles({});
  return (
    <>
      <MuiRadio className={styles.Radio} value={value} />
      <label htmlFor={id}>{text}</label>
    </>
  );
};

export default RadioButton;
