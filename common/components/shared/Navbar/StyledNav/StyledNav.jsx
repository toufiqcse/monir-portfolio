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
import style from './styledNav.module.css'

import ContactPageIcon from "@mui/icons-material/ContactPage";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { FacebookRounded, LinkedIn, Twitter, YouTube } from "@mui/icons-material";



const Title = styled("div")(({ theme }) =>
  theme.unstable_sx({
    fontSize: createFluidValue(0.9, 1.5),
    pl: ".2em",

    "a:first-of-type": {
      fontWeight: "700",
      color: "black",
    },
    " a: hover ": {
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
    // display: "flex",
    justifyContent: "flex-end",
    // p: ".2em 0",
    "& a": {
      p: "0 .5em",
      fontSize: createFluidValue(0.65, 1),
      fontWeight: "400",
      color: "inherit",
      "&:hover": {
        color: "text.2",
        fontWeight: "400",
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
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
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
    height: "80px",
    userSelect: "none",
    background: "bg.2",
    px: createFluidValue(0.3, 0)
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


  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    < div className={`${style.fixed_header} ${isSticky ? style.sticky : ''}`}>
      <Main style={{ maxWidth: "1140px", margin: " 0 auto" }}>
        <div>
          <Title>
            <Link component="a" href="/">
              Monir Hossain
            </Link>
          </Title>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "2.5em" }}>
          {NavLinks.map((link, i) => (
            <NavLink
              key={i}
              sx={{
                borderBottom: currentRoute(i, link.href) ? ".13em solid #0abf53" : 0,
                transform: currentRoute(i, link.href) ? "scale(1.1)" : "initial",
              }}
            >
              <Link
                component={"a"}
                href={link?.href}
                style={{
                  color: currentRoute(i, link.href) ? "#0abf53" : null,
                  fontWeight: currentRoute(i, link.href) ? "500" : null,
                  transition: "color 0.3s",
                }}
              >
                {link?.name}
              </Link>
            </NavLink>
          ))}

          {/* <Tooltip title={themeLight ? "Dark Mode" : "Light Mode"}>
            <IconButton onClick={handleThemeToggle}>
              {themeLight ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Tooltip> */}


          <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
            <NavDrawer onClick={() => setOpen(false)}>
              <NavDrawerLogo>
                <Title>
                  <Link component="a" href="/">
                    Monir Hossain
                  </Link>
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
                      <Link style={{ color: currentRoute(item, item.href) ? "#0abf53" : "#0abf53" }} component={'a'} href={item.href}> {item.name} </Link>
                    </ListItemButton>
                  ))}
                </List>
                <Box style={{
                  display: "flex", justifyContent: 'center', alignItems: "center", gap: "0.3em", color: "green", fontSize: "1rem",
                }} >
                  <p href='/#' > <FacebookRounded></FacebookRounded>  </p>
                  <p href='/#'> <Twitter></Twitter>  </p>
                  <p href='/#'> <LinkedIn></LinkedIn>  </p>
                  <p href='/#'> <YouTube></YouTube>  </p>
                </Box>
              </Box>
            </NavDrawer>
          </Drawer>
        </div>
        {/* <SearchBox>
        <IconButton>
          <IoSearch />
        </IconButton>
      </SearchBox> */}



        <MenuButton >
          <IconButton size="small" onClick={() => setOpen(true)}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </MenuButton>
      </Main>
    </div>

  );
};

export default StyledNav;
