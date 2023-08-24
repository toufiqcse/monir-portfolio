import { useRouter } from "next/router";
import StyledNav from "./StyledNav/StyledNav";

const Navbar = () => {
  const router = useRouter();
  const route = router?.route;
  return (
    <div style={{ position: "sticky", top: "5px", background: "white" }}>
      <StyledNav />
    </div>
  );
};

export default Navbar;

// { display: route === "/" ? "none" : "initial" }