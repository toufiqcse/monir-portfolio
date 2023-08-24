import { frontendOrigin } from "@/common/types/utils/const";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import logo from "/common/content/logo/pizzaLogo.png";

import ContactPageIcon from "@mui/icons-material/ContactPage";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useContext, useState } from "react";

import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";

const Logo = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    width: { xs: "80%", sm: "40%" },

    "& img": {
      height: "auto",
      width: createFluidValue(1.2, 2.3),
    },
  })
);

const Title = styled("div")(({ theme }) =>
  theme.unstable_sx({
    fontSize: createFluidValue(0.9, 1.5),
    pl: ".2em",

    "span:first-of-type": {
      fontWeight: "700",
    },
    " span: hover ": {
      color: "text.2",
      transition: "color 0.3s",
      cursor: "pointer"
    }
  })
);

const NavLinks = [
  { name: "About", href: "/about", icon: <HomeIcon /> },
  { name: "Free Wordpress Template", href: "/free-template", icon: <StoreIcon /> },
  { name: "Contact", href: "/contact", icon: <WidgetsIcon /> },

];



const NavLink = styled("div")(({ theme }) =>
  theme.unstable_sx({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    p: ".2em 0",

    "& a": {
      p: "0 .5em",
      fontSize: createFluidValue(0.65, 0.85),
      fontWeight: "400",
      color: "inherit",
      overflow: "hidden",
      "&:hover": {
        color: "text.2",
        fontWeight: "500",
      },
    },
  })
);

const NavDrawer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: { xs: "70vw", sm: "50vw", tablet: "30vw" },
  })
);

const NavDrawerLogo = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    py: "1em",
    justifyContent: "center",
    userSelect: "none",
  })
);

const MenuButton = styled("div")(({ theme }) =>
  theme.unstable_sx({
    "& button": {
      bgcolor: "bg.2",
      ml: ".2rem",
      fontSize: createFluidValue(0.8, 1.5),

      "&:hover": {
        backgroundColor: "bg.2",
      },

      "& svg": {
        color: "white",
      },
    },
  })
);

const SearchBox = styled("div")(({ theme }) =>
  theme.unstable_sx({
    "& button": {
      fontSize: createFluidValue(1, 1.4),
      "& svg": {
        strokeWidth: ".5em",
      },
    },
  })
);

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "bg.1",
    px: createFluidValue(0.4, 1),
    height: createFluidValue(2, 5),
    userSelect: "none",
    maxWidth: "1200px",
    margin: " 0 auto"
  })
);



const StyledNav = () => {
  const { themeLight, setThemeType } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setThemeType(!themeLight);
  };

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const route = router?.route;
  const fullPath = `${frontendOrigin}${route}`;

  const currentRoute = (index, link) => {
    if (index === 0) {
      return route === link;
    } else {
      return fullPath.match(frontendOrigin + link);
    }
  };
  currentRoute();

  return (
    <Main>
      <Logo>

        <Title>
          <span>Monir Hossain</span>
        </Title>
      </Logo>

      {NavLinks.map((link, i) => (
        <NavLink
          key={i}
          sx={{
            borderBottom: currentRoute(i, link.href)
              ? ".13em solid #0abf53"
              : 0,
            // transform: currentRoute(i, link.href) ? "scale(1.1)" : "initial",
          }}
        >
          <Link
            component={"a"}
            href={link?.href}
            style={{
              color: currentRoute(i, link.href) ? "#0abf53" : null,
              fontWeight: currentRoute(i, link.href) ? "600" : null,
              transition: "color 0.3s"
            }}
          >
            {link?.name}
          </Link>
        </NavLink>
      ))}

      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <NavDrawer onClick={() => setOpen(false)}>
          <NavDrawerLogo>
            <Image src={logo} height={"32"} width={"32"} alt="Logo" />
            <Title>
              <span>Monir</span>
              <span>Hossain</span>
            </Title>
          </NavDrawerLogo>

          <Divider />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <List>
              {NavLinks.map((item, index) => (
                <ListItemButton key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link href={item.href}> {item.name} </Link>
                </ListItemButton>
              ))}
            </List>
          </Box>
        </NavDrawer>
      </Drawer>

      {/* <SearchBox>
        <IconButton>
          <IoSearch />
        </IconButton>
      </SearchBox> */}

      <Tooltip title={themeLight ? "Dark Mode" : "Light Mode"}>
        <IconButton onClick={handleThemeToggle}>
          {themeLight ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>

      {/* <MenuButton>
        <IconButton size="small" onClick={() => setOpen(true)}>
          <MenuIcon fontSize="inherit" />
        </IconButton>
      </MenuButton> */}
    </Main>
  );
};

export default StyledNav;
