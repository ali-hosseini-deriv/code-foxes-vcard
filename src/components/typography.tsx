import Typography from "@mui/material/Typography";
import { styled } from '@mui/styles';


const StyledTypography = styled(Typography)({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
 
  },
});

type Props = {
  variant: any;
  text: string;
} 


const Text : React.FC<Props> = ({text = '', variant = 'h1'}) => {
  return <StyledTypography variant={variant}>{text}</StyledTypography>;
};


export default Text;