import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import {
  Email,
  EmailOutlined,
  MessageOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material";
import Link from "next/link";

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

const ContactHead = styled("div")(({ theme }) =>
  theme.unstable_sx({
    py: createFluidValue(4, 5),
  })
);
const ContactContent = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "p:first-of-type": {
      fontSize: createFluidValue(2, 3),
      fontWeight: 600,
      lineHeight: "1.2",
      mb: "0.8em",
    },
    "p:last-of-type": {
      mb: "0",
      fontSize: createFluidValue(1, 1.2),
      fontWeight: "300",
    },
  })
);

const ContactBox = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    gridColumnGap: "20px",
    gridRowGap: "0px",
    pb: createFluidValue(4, 5),
  })
);
const ContactDetails = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    border: "2px solid #eee",
    borderRadius: "10px",
    py: createFluidValue(1, 1.5),
    px: createFluidValue(1.3, 1.5),
    ":hover": {
      background: "#eee",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    "& p": {
      fontSize: createFluidValue(1.5, 1.5),
      marginTop: "0",
      my: "0.5em",
      fontWeight: "600",
      lineHeight: "1.2",
      color: " #000",
    },
    "& a": {
      color: "text.2",
      fontSize: createFluidValue(1, 1),
      fontWeight: "300",
      mb: "0",
    },
  })
);

const contact = () => {
  return (
    <Main>
      <Container>
        <ContactHead>
          <ContactContent>
            <Typography component="p">{"Contact Me"}</Typography>
            <Typography component="p">
              {
                "I 'd love to find out more about your upcoming WordPress project. "
              }
              {"Get in touch today."}
            </Typography>
          </ContactContent>
        </ContactHead>
        <ContactBox>
          {/* email contact */}
          <ContactDetails>
            <span>
              <EmailOutlined
                style={{
                  fontSize: createFluidValue(2, 2.5),
                  color: "green",
                }}
              ></EmailOutlined>
            </span>
            <Typography component={"p"}>Email</Typography>
            <Link href={"mailto:monirh.me@gmail.com"}>
              {"monirh.me@gmail.com"}
            </Link>
          </ContactDetails>
          {/* whatsapp contact */}
          <ContactDetails>
            <span>
              <WhatshotOutlined
                style={{
                  fontSize: createFluidValue(2, 2.5),
                  color: "green",
                }}
              ></WhatshotOutlined>
            </span>
            <Typography component={"p"}>Whatsapp</Typography>
            <Link href={"https://wa.me/+8801710021512"}>
              {"+88 01710 021512"}
            </Link>
          </ContactDetails>
          {/* Messanger Contact */}
          <ContactDetails>
            <span>
              <MessageOutlined
                style={{
                  fontSize: createFluidValue(2, 2.5),
                  color: "green",
                }}
              ></MessageOutlined>
            </span>
            <Typography component={"p"}>Messanger</Typography>
            <Link href={"https://m.me/monirhossain70"}>{"Monir Hossain"}</Link>
          </ContactDetails>
        </ContactBox>
      </Container>
    </Main>
  );
};

export default contact;
