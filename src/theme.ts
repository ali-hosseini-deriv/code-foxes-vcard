import {createTheme} from '@mui/material/styles';
import {red} from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#fafafa",
                }
            },
        },
    },
    palette: {
        primary: {
            main: '#ff444f',
            light: '#ff444f',
        },
        secondary: {
            main: '#d43e47',
            light: '#d43e47',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;
