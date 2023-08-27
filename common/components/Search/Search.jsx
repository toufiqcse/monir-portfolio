import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { styled } from "@mui/material";

const SearchSec = styled("div")(({ theme }) =>
    theme.unstable_sx({
        mb: createFluidValue(1, 1.5),

        "& input": {
            border: "2px solid #0abf53",
            width: "100%",
            px: "1em",
            py: "0.8em",
            borderRadius: "8px",
            outline: "none",
            fontSize: "1rem",
        },
    })
);

const Search = () => {
    return (
        <SearchSec>
            <input
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
            />
        </SearchSec>
    )
}

export default Search