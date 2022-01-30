import TextField from "@mui/material/TextField";
import { styled } from "@mui/styles";

const StyledTextField  = styled(TextField)({

});

const TextInput = () => {
  return <StyledTextField variant="outlined" />;
};

export default TextInput;
