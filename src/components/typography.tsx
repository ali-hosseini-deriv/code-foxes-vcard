import Typography from "@mui/material/Typography";
import { styled } from '@mui/styles';


const StyledTypography = styled(Typography)({


});

type Props = {
  variant: any;
  text: string;
  color?: string;
} 


const Text : React.FC<Props> = ({text = '', variant = 'h1', color = 'black'}) => {
  return <StyledTypography variant={variant} color={color}>{text}</StyledTypography>;
};


export default Text;