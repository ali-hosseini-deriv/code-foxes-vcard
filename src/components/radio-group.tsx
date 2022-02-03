import React from "react";
import { RadioGroup as MuiRadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  RadioGroup: {},
}));

type Props = {};

const RadioGroup: React.FC<Props> = ({}) => {
  const styles = useStyles({});
  return <MuiRadioGroup className={styles.RadioGroup} />;
};

export default RadioGroup;
