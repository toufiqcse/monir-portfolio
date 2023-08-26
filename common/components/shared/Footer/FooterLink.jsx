import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { Email } from "@mui/icons-material";
import { Box, Typography, styled } from "@mui/material"
import Link from "next/link";


const Main = styled("div")(({ theme }) =>
    theme.unstable_sx({
        py: createFluidValue(2, 2.5),
        display: "flex",
        flexWrap: { xs: 'wrap', sm: "nowrap", md: "nowrap", lg: "nowrap" },
        width: "100%"
    })
);
const FLink = styled("div")(({ theme }) =>
    theme.unstable_sx({
        flex: " auto ",
        width: "50%",
        pr: createFluidValue(2, 0),
        mr: createFluidValue(0, 0.5),
        mt: createFluidValue(1, 0),
        "span:first-of-type ": {
            textTransform: "uppercase",
            display: "block",
            color: "#2d374b",
            fontSize: createFluidValue(0.70, 0.70),
            fontWeight: "700",
            letterSpacing: "0.03rem",
            mb: "1rem"
        },
        "& ul": {
            listStyleType: "none",
            pl: "0",
            mb: "0"
        },
        "& li": {
            pb: "0.25em"
        },
        "li: last-of-type": {
            pb: "0px"
        },
        "li > a": {
            textDecoration: "none",
            transition: "all 0.3s ease 0s",
            color: "text.1",
            fontSize: createFluidValue(0.80, 0.80),
            fontWeight: "400"
        },
        "li > a: hover ": {
            color: "text.2"
        },
        "& p": {
            fontSize: createFluidValue(0.80, 0.80)
        }
    })
);



const FooterLink = () => {
    return (
        <Main>
            <FLink>
                <span>useful links</span>
                <ul>
                    <li>
                        <Link href="/" component="a">About Me</Link>
                    </li>
                    <li>
                        <Link href="/" component="a">Free Website Template</Link>
                    </li>
                </ul>
            </FLink>
            <FLink>
                <span>available on</span>
                <ul>
                    <li>
                        <Link href="/" component="a">Fiverr.com</Link>
                    </li>
                    <li>
                        <Link href="/" component="a">Freelancer.com</Link>
                    </li>
                </ul>
            </FLink>
            <FLink>
                <span>follow Me</span>
                <ul>
                    <li>
                        <Link href={"/#"} component="a">
                            {"Subscribe by email"}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#"} component="a">
                            {"Facebook"}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#"} component="a">
                            {"Twitter"}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#"} component="a">
                            {"Instagram"}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#"} component="a">
                            {"Linkedin"}
                        </Link>
                    </li>
                    <li>
                        <Link href={"/#"} component="a">
                            {"Github"}
                        </Link>
                    </li>
                </ul>
            </FLink>
        </Main>
    )
}

export default FooterLink