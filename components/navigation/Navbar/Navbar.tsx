import Button from "@/components/Button";
import NavLink from "../NavLink/NavLink";
import NavList from "../NavList";
import NavLogo from "../NavLogo";
import Styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <NavLogo />
      <NavList>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Services</NavLink>
        <NavLink href="/">technologies</NavLink>
        <NavLink href="/">how to</NavLink>
      </NavList>
      <NavList>
        <NavLink href="/">
          <Button type="outline">contact us</Button>
        </NavLink>
        <NavLink href="/">
          <Button type="contained">join hydra</Button>
        </NavLink>
      </NavList>
    </nav>
  );
}
