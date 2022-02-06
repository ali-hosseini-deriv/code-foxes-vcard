import Box from "@mui/material/Box";
import { propsToClassKey, styled } from "@mui/styles";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

const useStyles = makeStyles((theme: Theme) => ({
  FlexBox: {
    display: "flex",
    maxWidth: "100%",
    margin: (props: any) => props.margin,
    flexDirection: (props: any) => props.direction,
    justifyContent: (props: any) => props.justify_content,
  },
}));

type Props = {
  children: React.ReactNode;
  direction?: string;
  margin?: string;
  justify_content?: string;
};

const Flex: React.FC<Props> = ({
  children,
  direction = "row",
  margin,
  justify_content,
}) => {
  const styles = useStyles({ direction, margin, justify_content });

  return (
    <Box className={styles.FlexBox} component="div">
      {children}
    </Box>
  );
};

export default Flex;
