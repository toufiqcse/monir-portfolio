import { Box, Typography, styled } from "@mui/material";
import { AboutHead, HeadContent } from "./about";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import Image from "next/image";
import comingSoon from "@/common/content/images/comming-soon.jpg";
const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    px: createFluidValue(0.5, 0),
  })
);
const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "1140px",
    margin: "0 auto",
  })
);
const ComingTemp = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
    },
    gridTemplateRows: "1fr",
    gridColumnGap: "1.2em",
    gridRowGap: "0px",
  })
);
const FreeTemp = styled("div")(({ theme }) =>
  theme.unstable_sx({
    ":hover": {
      color: "text.2",
      cursor: "pointer",
    },
  })
);

const FreeTemplate = () => {
  return (
    <Main>
      <Container>
        <AboutHead>
          <HeadContent>
            <Typography
              component="p"
              style={{ fontSize: createFluidValue(1.5, 2) }}
            >
              {"Free Website Template"}
            </Typography>
          </HeadContent>
        </AboutHead>
        <Box sx={{ pb: createFluidValue(4, 5) }}>
          <ComingTemp>
            <FreeTemp>
              <Image
                src={comingSoon}
                alt="coming soon "
                width="100%"
                height="100%"
                priority
              />
              <Typography variant="h5">{"Coming Soon"}</Typography>
              <Typography>{"Free Wordpress Template"}</Typography>
            </FreeTemp>
          </ComingTemp>
        </Box>
      </Container>
    </Main>
  );
};

export default FreeTemplate;
