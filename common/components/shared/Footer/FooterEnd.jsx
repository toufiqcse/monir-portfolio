import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue"
import { Box, Typography, styled } from "@mui/material"

const Footers = styled("div")(({ theme }) =>
    theme.unstable_sx({
        py: createFluidValue(1.5, 2.5),
        display: "flex",
        flexWrap: "wrap",
        mx: "0.2em",

    })
);

const FooterEnd = () => {

    const date = new Date();
    const years = date.getFullYear()

    return (
        <Footers>
            <Box sx={{ width: "100%", flex: " 0 0 auto" }}>
                <Typography sx={{ mb: "0", fontSize: "0.87rem", fontWeight: "300", textAlign: { xs: "center", sm: "center", md: "start" } }} > © {` Monir Hossain. ${years}`}</Typography>
            </Box>
        </Footers >
    )
}

export default FooterEnd