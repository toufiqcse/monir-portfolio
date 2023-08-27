import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { styled } from "@mui/material";

const FilterByCat = styled("div")(({ theme }) =>
    theme.unstable_sx({
        "& p": {
            fontSize: createFluidValue(1, 1.2),
            fontWeight: "500",
            // py: createFluidValue(1, 1.5)
        },
        display: 'flex',
        alignItems: "center",
        justifyContent: "flex-start"
    })
);


const Filter = () => {
    return (
        <FilterByCat>
            <p>Filter :</p>
            <select name="category" id="" value={"bb"}>
                <option value="Kids">Kids</option>
                <option value="Kids">Kids</option>
                <option value="Kids">Kids</option>
            </select>
        </FilterByCat>
    )
}

export default Filter