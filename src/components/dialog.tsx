import React from "react";
import { Dialog as MuiDialog } from "@mui/material";


type Props = {
  handleClose: any;
  is_open: boolean;
  children: any;
};

const Dialog: React.FC<Props> = ({ handleClose, is_open, children }) => {
  return (
    <MuiDialog
      maxWidth="xl"
      open={is_open}
      onClose={handleClose}
      PaperProps={{
        sx: {
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
