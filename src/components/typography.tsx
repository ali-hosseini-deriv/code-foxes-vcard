import Typography from "@mui/material/Typography";
import { styled } from '@mui/styles';


const StyledTypography = styled(Typography)({

    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

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