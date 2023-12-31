import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import Link from "next/link";
import FooterLink from "./FooterLink";
import FooterEnd from "./FooterEnd";

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    background: "#f9f9f9",
    borderTop: "1px solid #eee",
    display: "block",
    px: createFluidValue(0.5, 0)
  })
);
const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "1140px",
    margin: "0 auto"

  })
);
const FooterHead = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: { sm: "block", md: "flex" },
    flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { sm: "column", md: "row" },
    width: "100%",
    pt: createFluidValue(2, 3.5),
    pb: createFluidValue(1, 1.5),
    "p:first-of-type": {
      fontSize: createFluidValue(1.5, 2.2),
      fontWeight: "600",
      lineHeight: "1.2",
    },
    " a": {
      backgroundColor: "bg.2",
      outline: "none",
      border: "none",
      display: "inline-block",
      lineHeight: "1.5",
      textAlign: "center",
      cursor: "pointer",
      verticalAlign: "middle",
      userSelect: "none",
      fontWeight: "600",
      fontSize: createFluidValue(0.9, 1),
      textDecoration: "none",
      color: "#fff",
      transition: "all 0.2s ease-in-out",
      px: createFluidValue(1, 1.8),
      py: createFluidValue(0.5, 0.75),
      borderRadius: "4px"
    }

  })
);


const Footer = () => {
  return <Main>
    <Container >
      <Box>
        <Box sx={{ borderBottom: "2em" }}>
          <FooterHead>
            <Box sx={{ width: { sm: "100%", xs: "100%", md: "66.67%" }, }}>
              <Typography component="p">Download Best Seller Premium WordPress Themes</Typography>
            </Box>
            <Box sx={{ width: { sm: "100%", xs: "100%", md: "33%" }, textAlign: { xs: "start", sm: "start", md: "end" }, py: { xs: '1em', md: "0" } }}>
              <Link href={"/#"} component="a">Download Now</Link>
            </Box>
          </FooterHead>
          <FooterLink />
          <Divider></Divider>
          <FooterEnd />
        </Box>
      </Box>
    </Container >
  </Main >;
};

export default Footer;
