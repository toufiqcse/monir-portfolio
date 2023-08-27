import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { styled } from "@mui/material";
import Image from "next/image";


const ProductDisplay = styled("div")(({ theme }) =>
    theme.unstable_sx({
        py: createFluidValue(2, 2),
        display: "grid",
        gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
        },
        gridTemplateRows: "1fr",
        gridColumnGap: "20px",
        gridRowGap: "10px",
    })
);

const ProductsCard = styled("div")(({ theme }) =>
    theme.unstable_sx({

    })
);


const Products = ({ productsData }) => {
    return (
        <ProductDisplay>
            {
                productsData.map((index, product) => (
                    <ProductsCard key={index}>
                        <Image src={product.img} alt="product" width={400} height={500} priority />
                        <p>{product.title}</p>
                    </ProductsCard>
                ))
            }
        </ProductDisplay>
    )
}

export default Products