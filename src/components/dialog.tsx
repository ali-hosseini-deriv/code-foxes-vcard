import React from "react";
import { Dialog as MuiDialog } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({

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
 
      maxWidth="xl"
      open={is_open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          width: "30%",
          height: "25%",
          padding: "30px",
          border: "2px solid #ff444f",
        },
      }}
    >
      {children}
    </MuiDialog>
  );
};

export default Dialog;
