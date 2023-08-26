import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useContext } from "react";
const font = "'Poppins', sans-serif";

const Themes = ({ children }) => {
  const { themeLight } = useContext(ThemeContext);

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        mobile: 640,
        tablet: 768,
        laptop: 1024,
      },
    },

    palette: {
      mode: themeLight ? "light" : "dark",

      text: {
        1: "#272d2e",
        2: "#0abf53",
      },

      bg: {
        1: "#f9f9f9",
        2: "#0abf53",
      },

      button: {
        1: "#ffcf29",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themes;
