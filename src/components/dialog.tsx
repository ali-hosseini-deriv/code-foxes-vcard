import React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  Dialog: {

  },
}));

type Props = {
  handleClose: any;
  is_open: boolean;
  children: any;
};

const Dialog: React.FC<Props> = ({ handleClose, is_open, children }) => {
  const styles = useStyles({});
  return (
    <MuiDialog
      className={styles.Dialog}
      maxWidth="lg"
      open={is_open}
      onClose={handleClose}
    >
      {children}
    </MuiDialog>
  );
};

export default Dialog;
