import { createTheme, } from '@mui/material/styles';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import "./index.scss";
const index = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0D263B',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        main: '#0D263B',
        light: '#F5EBFF',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#47008F',
      },
    },
  });
  return (
    <>
      <Box sx={{ flexGrow: 1 }} color={theme.palette.primary.main}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Houzing
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default index;
