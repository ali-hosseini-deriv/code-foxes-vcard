import TextField from "@mui/material/TextField";
import { styled } from "@mui/styles";

const StyledTextField  = styled(TextField)({
  width: "100%",
  backgroundColor: "#f0f3f7"
});

const TextInput = ({label}: {label: string}) => {
  return <StyledTextField label={label} variant="outlined" />;
};

export default TextInput;
