import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { Typography, styled } from "@mui/material";
import Image from "next/image";
import aboutImg from "@/common/content/images/_about-img.jpg";
import { aboutDetails } from "@/fakeDb/data";

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));
const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "1140px",
    margin: "0 auto",
    px: createFluidValue(0.5, 0),
  })
);
const AboutHead = styled("div")(({ theme }) =>
  theme.unstable_sx({
    py: createFluidValue(4, 5),
  })
);
const HeadContent = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: {
      fontSize: createFluidValue(2, 3),
      fontWeight: 600,
      lineHeight: "1.2",
    },
  })
);
const AboutSection = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pb: createFluidValue(2, 5),
  })
);
const AboutContent = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // mx: createFluidValue(0,0)
    width: { xs: "100%", md: "66%" },
    maxWidth: "100%",
    margin: "0 auto",
  })
);
const ImageBox = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: "0.5em",
    pb: "1.5em",
  })
);
const AboutDetails = styled("div")(({ theme }) =>
  theme.unstable_sx({
    "& p": {
      mt: 0,
      mb: "1em",
      fontSize: createFluidValue(0.9, 0.9),
      textJustify: "inter-word",
      textAlign: "justify",
    },
  })
);

const AboutRoute = () => {
  return (
    <Main>
      <Container>
        <AboutHead>
          <HeadContent>
            <Typography variant="p">{"About Monir"}</Typography>
          </HeadContent>
        </AboutHead>
        <AboutSection>
          <AboutContent>
            {/* upload image */}
            <ImageBox>
              <Image
                src={aboutImg}
                alt="about image"
                width="100%"
                height="100%"
                priority
                style={{ borderRadius: "6px" }}
              />
            </ImageBox>
            {/* about details here */}
            <AboutDetails>
              <p>
                {
                  "I'm Monir, a freelance WordPress developer from Bangladesh. I've been a WordPress developer for 5 years. I live and breathe WordPress."
                }
              </p>
              <p>
                {
                  "My custom-built websites are fast loading, accessible, and easy to manage. My design partners will help you improve conversion rates and user engagement."
                }
              </p>
              <p>
                {
                  "I truly live by the motto work smarter, not harder. I feel that is the best way to deliver a client what they need in the shortest amount of time possible."
                }
              </p>
              <p>
                {
                  "I pay maximum attention to a project so that the job would be done as fast as possible with no loss in quality."
                }
              </p>
              <p>{"If you are interested, feel free to contact me."}</p>
            </AboutDetails>
          </AboutContent>
        </AboutSection>
      </Container>
    </Main>
  );
};

export default AboutRoute;
