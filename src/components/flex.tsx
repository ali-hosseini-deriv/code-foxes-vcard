import Box from "@mui/material/Box";
import { styled } from "@mui/styles";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  FlexBox: {
    display: "flex",
    maxWidth: "100%",
    flexDirection: (props: any) => props.direction,
  },
}));

type Props = {
  children: React.ReactNode;
  direction?: string;
};

const Flex: React.FC<Props> = ({ children, direction = "row" }) => {
  const styles = useStyles({ direction });

  return (
    <Box className={styles.FlexBox} component="div">
      {children}
    </Box>
  );
};

export default Flex;
