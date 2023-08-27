import { Box, Typography, styled } from "@mui/material";
import { Container, Main } from "./about";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import Link from "next/link";
import { ShoppingBagRounded, ShoppingBasketOutlined } from "@mui/icons-material";
import { useState } from "react";
import Image from "next/image";

const Heading = styled("div")(({ theme }) =>
    theme.unstable_sx({
        background: "#eee",
        maxWidth: "100%",
        mb: "-1px"
    })
);
const HeadingContent = styled("div")(({ theme }) =>
    theme.unstable_sx({
        display: " grid",
        gridTemplateColumns: " 1fr",
        gridTemplateRows: " repeat(2, 1fr)",
        gridColumnGap: " 0px",
        gridRowGap: " 0px",
        lineHeight: "0",
        width: "100%",
        " & p": {
            fontSize: createFluidValue(1.5, 1.7),
            pt: "0.5em",
            fontWeight: "500",
            lineHeight: "1.2"
        },

    })
);
const HeadingTag = styled("div")(({ theme }) =>
    theme.unstable_sx({
        display: "flex",
        alignContent: "start",
        alignItems: "center",
        "span:first-of-type": {
            fontSize: createFluidValue(0.8, 1.1),
            fontWeight: "300"
        },
        "a:first-of-type": {
            color: "blue",
            fontSize: createFluidValue(1, 1),
            fontWeight: "400"
        },
        "& div": {
            mr: '2em'
        },
        "span:nth-of-type(2n)": {
            fontSize: createFluidValue(1, 1.3),
            fontWeight: "500",
            px: "0.3em",
            color: "text.2"
        },
        "span:nth-of-type(3n)": {
            fontSize: createFluidValue(0.8, 1.1),
            fontWeight: "300",
        },

    })
);

const FilterButton = styled("div")(({ theme }) =>
    theme.unstable_sx({
        display: " grid",
        gridTemplateColumns: "repeat(8,1fr)",
        gridTemplateRows: " 1fr",
        gridColumnGap: " 0px",
        gridRowGap: " 0px",
        pt: "0.5em"
    })
);

const FilterBtnName = styled("div")(({ theme }) =>
    theme.unstable_sx({
        px: "0.5em",
        py: "1em",
        cursor: "pointer",
        "span:last-of-type": {
            background: "#309bf2",
            px: "0.3em",
            py: "0.1em",
            fontWeight: "700",
            fontSize: createFluidValue(1, 1),
            color: "#fff",
            borderRadius: "4px"
        },
        " span:nth-of-type(2n)": {
            mx: "1em",
            color: "#f4ab0e"
        }
    })
);

const ProductDisplay = styled("div")(({ theme }) =>
    theme.unstable_sx({
        // my: createFluidValue(1, 0),
        width: '100%',
        display: "grid",
        gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
        },
        gridTemplateRows: "1fr",
        gridColumnGap: "20px",
        gridRowGap: "10px",
        margin: "0 auto",
        gap: "1.5em",

    })
);
const ProductImageLeftSec = styled("div")(({ theme }) =>
    theme.unstable_sx({
        my: createFluidValue(1.5, 2),
        // width: { xs: "100%", sm: "100%", md: '60%' },
        border: "1px solid #eee",
        background: "#f9f9f9",
        p: '0.5em',
        "& img": {
            // height: "auto",
            width: "100%",
        }
    })
);
// const ProductDetailsCardSec = styled("div")(({ theme }) =>
//     theme.unstable_sx({
//         my: createFluidValue(1.5, 2),
//         border: "1px solid #eee",
//         background: "#f9f9f9",
//         py: "1em",
//         px: "0.8em"
//     })
// );


const ProductDetails = ({ item }) => {
    const [filterActive, setFilterActive] = useState(0);

    // const handleFilterBtnClick = (buttonIndex) => {
    //     setFilterActive(buttonIndex);
    // };
    // const buttonStyles = (buttonIndex) => {
    //     return buttonIndex === filterActive
    //         ? {
    //             backgroundColor: "#fff",
    //             color: "#0abf53",
    //             // borderRadius: "4px",
    //         }
    //         : {
    //             color: "black"
    //         };
    // };

    return (
        <Main>
            <>
                <Heading>
                    <Container>
                        <HeadingContent>
                            <Box><Typography component={"p"}>{"JaduTech - IT Solution And Service Company Wordpress Template"}</Typography></Box>
                            <HeadingTag>
                                <Box> <span>By</span> <Link component="a" href={"/#"}>jaduTech</Link> </Box>

                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    <span><ShoppingBasketOutlined></ShoppingBasketOutlined></span>
                                    <span>{"1,645"}</span>
                                    <span>sales</span>
                                </Box>
                            </HeadingTag>
                        </HeadingContent>
                        {/* <FilterButton>
                            <FilterBtnName style={buttonStyles(0)} onClick={() => handleFilterBtnClick(0)}>{"Item Details"}</FilterBtnName>
                            <FilterBtnName style={buttonStyles(1)} onClick={() => handleFilterBtnClick(1)}>
                                <span>{"Reviews"}</span>
                                <span>4.75</span>
                                <span>{20}</span>
                            </FilterBtnName>
                            <FilterBtnName style={buttonStyles(2)} onClick={() => handleFilterBtnClick(2)}>
                                <span>{"Comments"}</span>
                                <span></span>
                                <span>{"10"}</span>
                            </FilterBtnName>
                            <FilterBtnName style={buttonStyles(3)} onClick={() => handleFilterBtnClick(3)}>{"Support"}</FilterBtnName>
                        </FilterButton> */}
                    </Container>
                </Heading>
                <Container>
                    <ProductDisplay>
                        <ProductImageLeftSec className="div1">
                            <Image
                                src={item.img}
                                alt={item.title}
                                style={{ objectFit: "contain" }}
                                priority={true}
                                width={500}
                                height={600}
                            // loading="lazy"
                            />
                        </ProductImageLeftSec>
                        {/* <ProductDetailsCardSec className="div2">2</ProductDetailsCardSec> */}
                    </ProductDisplay>
                </Container>
            </>
        </Main>
    )
}





export const getServerSideProps = async (ctx) => {
    const params = ctx.params;
    try {
        const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
        if (!res.ok) {
            throw new Error('Failed to fetch user data');
        }
        const item = await res.json();
        return {
            props: {
                item,
            }
        };
    }
    catch (error) {
        return {
            notFound: true,
        }

    }

}

export default ProductDetails