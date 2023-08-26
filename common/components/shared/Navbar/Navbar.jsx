import { useRouter } from "next/router";
import StyledNav from "./StyledNav/StyledNav";

const Navbar = () => {
  const router = useRouter();
  const route = router?.route;


  return (
    <div style={{ display: route === "/" ? "initial" : "initial", }}>
      <StyledNav />
    </div >
  );
};

export default Navbar;

// { display: route === "/" ? "none" : "initial" }