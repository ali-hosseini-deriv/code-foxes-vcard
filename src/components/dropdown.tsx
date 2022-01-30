import React, { ReactNode } from "react";
import Select from "@mui/material/Select";
import { styled } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";

const StyledDropDown = styled(Select)({});

type Props = {
  value: string;
  label: string;
  items: any;
};

type Item = {
  value: number;
  text: string;
};

const DropDown: React.FC<Props> = ({ value, label, items }) => {
  return (
    <StyledDropDown value={value} label={label}>
      {items.map((item: React.PropsWithChildren<Item>) => {
        console.log("item.value: ", item.value);
        console.log("item.text: ", item.text);
        return <MenuItem value={item.value}>{item.text}</MenuItem>;
      })}
    </StyledDropDown>
  );
};

export default DropDown;
